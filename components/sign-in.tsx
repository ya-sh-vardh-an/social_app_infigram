import React from 'react'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from './ui/button';
import { signinValidationSchema } from '@/lib/validation';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { useUserContext } from '@/app/__context__/AuthContext';
import { useCreateUserAccountMutation, useSignInAccountMutation } from '@/lib/react-query/queryAndMutations';
import Link from 'next/link';



const Signin = () => {
  
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const router = useRouter();

  const { mutateAsync: signInAccount, isPending: isSigningIn } = useSignInAccountMutation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof signinValidationSchema>>({
    resolver: zodResolver(signinValidationSchema),
    defaultValues: {
      email: '',
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signinValidationSchema>) {
    // Do something with the form values.
    // console.log(`We're here!`)
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if (!session) {
      return toast({ title: "Sign in failed. Please try again.", variant: "destructive" });
    }

    const isLoggedIn = await checkAuthUser();

    // console.log({ isLoggedIn });

    if (isLoggedIn) {

      form.reset();
      router.push('/');
    } else {
      return toast({ title: 'Sign-up failed. Please try again.', variant: "destructive"});
    }

  }

  return (
    <div className='flex flex-col justify-center items-center h-full min-h-screen'>
      <div className='text-white font-bold flex flex-row items-center'>
        <Image
            src='/assets/icons/new_logo.svg'
            alt='logo'
            width={140}
            height={170}
          />
      </div>
      <div className='text-white text-center mb-7'>
        <h2 className='font-bold text-xl'>Log in to your account</h2>
        <p className='font-semibold text-sm text-[#5d606e]'>Welcome back! Please enter your details to Sign in.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className='w-[300px]'>
                <FormLabel className='text-white'>Email</FormLabel>
                <FormControl>
                  <Input placeholder="turing@gmail.com" className='dark bg-[#1d1d1d] border-none' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className='w-[300px]'>
                <FormLabel className='text-white'>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" type='password' className='dark bg-[#1d1d1d] border-none rounded-r-none focus-visible:border-red' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-[100%] bg-[#1aa0ff] hover:bg-[#1871ff]'>Sign in</Button>

          <p className='text-small-regular text-light-2 text-center mt-2 text-white'>
            Don&apos;t have an account? <Link href='/sign-up' className='text-blue-800 hover:text-blue-500 ml-1'>Sign up</Link>
          </p>
        </form>
      </Form>
      
    </div>
  )
}

export default Signin