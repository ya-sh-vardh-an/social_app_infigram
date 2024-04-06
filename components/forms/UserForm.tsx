'use client'

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation';

import { useGetUpdateUserInfo, useGetUserById } from '@/lib/react-query/queryAndMutations';
import { UserFormSchema } from '@/lib/validation';
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
import Loader from '../shared/Loader';


type UserFormProps = {
  action: 'user' | 'guest',
  userId: string,
}

const UserForm = ({ action, userId } : UserFormProps) => {

  const { data: userData, isLoading: isGettingUser } = useGetUserById(userId);
  const { mutateAsync: updateUserInfo, isPending: isUpdatingUserInfo, reset: cancelUpdated} = useGetUpdateUserInfo();
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      username: userData?.username,
      name: userData?.name,
      email: userData?.email,
      bio: userData?.bio || '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated
    // console.log("values", values);
    updateUserInfo({ userId, userInfo: values });
    return router.push(`/home`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[70%] max-w-[450px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username:</FormLabel>
              <FormControl>
                <Input {...field} edit={action} id='username' className='dark bg-black border pr-12 border-gray-700'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input {...field} edit={action} id='name' className='dark bg-black border border-gray-700 pr-12'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input {...field} edit={action} id='email' type='email' className='dark bg-black border border-gray-700 pr-12'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio:</FormLabel>
              <FormControl>
                <Input {...field} placeholder='There is nothing to show here.' edit={action} id='bio' className='dark bg-black border h-auto border-gray-700 pr-12'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        { form.formState.isDirty && (<div className='flex flex-row justify-between mx-8 md:transition-display md:ease-in-out'>
              <Button type='button' variant='destructive' onClick={cancelUpdated}>Cancel</Button>
              <Button type='submit' variant='ghost' className='w-[82px] bg-[#108e3e] md:hover:bg-[#05692a] md:hover:text-white' disabled={isUpdatingUserInfo}>{ isUpdatingUserInfo ? <Loader /> : 'Update'}</Button>
          </div>)        
        }
      </form>
    </Form>
  )
}

export default UserForm