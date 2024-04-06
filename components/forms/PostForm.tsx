'use client'

import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Models } from 'appwrite';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea';
import FileUploader from '../shared/FileUploader';
import { PostFormSchema } from '@/lib/validation';
import { useUserContext } from '@/app/__context__/AuthContext';
import { useToast } from '../ui/use-toast';
import { useCreatePost, useUpdatePost } from '@/lib/react-query/queryAndMutations';


type PostFormProps = {
  post?: Models.Document;
  action: 'Create' | 'Update';
}

const PostForm = ({ post, action }: PostFormProps) => {

  const { mutateAsync: createPost, isPending: isLoadingCreate, } = useCreatePost();
  const { mutateAsync: updatePost, isPending: isUpdatingPost } = useUpdatePost();

  const { user } = useUserContext();
  const router = useRouter()

  const { toast } = useToast();

  const form = useForm<z.infer<typeof PostFormSchema>>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post?.location : "",
      tags: post ? post?.tags.join(",") : "",
    },
  })

  async function onSubmit(values: z.infer<typeof PostFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (post && action === 'Update') {
      const updatedPost = await updatePost({
        ...values,
        postId: post.$id,
        imageId: post?.imageId,
        imageUrl: post?.imageUrl,
      });

      if (!updatedPost) {
        toast({ title: 'Error updating the post. Please try again.', variant: "destructive" })
      }

      return router.push(`/home/posts/${post.$id}`)
    }

    const newPost = await createPost({
      ...values,
      userId: user.id,
    })

    if (!newPost) {
      toast({
        title: "Failed to create post. Please try again later.",
        variant: "destructive"
      })
    }

    router.push('/home');
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5xl">
          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='shad-form_label'>Caption</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="#eatfine" 
                    className='shad-textarea custom-scrollbar bg-[#181717] resize-none' 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className='shad-form_message' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='shad-form_label'>Add Photos</FormLabel>
                <FormControl>
                  <FileUploader 
                    fieldChange={field.onChange}
                    mediaUrl={post?.imageUrl}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='shad-form_message' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='shad-form_label'>Add Location</FormLabel>
                <FormControl>
                  <Input 
                    type='text'   
                    className='shad-input bg-[#181717]'
                    placeholder='India'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='shad-form_message' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='shad-form_label'>Add Tags
                (separated by comma &apos; , &apos;)
                </FormLabel>
                <FormControl>
                  <Input 
                    type='text' 
                    className='shad-input bg-[#181717]'
                    placeholder='Art, Expression, Learn'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='shad-form_message' />
              </FormItem>
            )}
          />
          <div className='flex gap-4 items-center justify-end'>
            <Button type="button" className={`shad-button_dark_4 bg-[#742424] hover:bg-[#c33030] ${isLoadingCreate || isUpdatingPost ? 'cursor-not-allowed' : ''}`} onClick={() => router.push('/home')}>Cancel</Button>
            <Button type="submit" className={`shad-button_primary whitespace-nowrap bg-[#41a876] hover:bg-[#34d989] ${isLoadingCreate || isUpdatingPost ? 'cursor-not-allowed' : ''}`} disabled={isLoadingCreate || isUpdatingPost}>{ isLoadingCreate || isUpdatingPost ? 'Loading...' : action + ' Post' }</Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default PostForm
