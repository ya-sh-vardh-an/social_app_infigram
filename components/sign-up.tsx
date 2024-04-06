import React, { useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
// import { PiEyeClosedBold } from 'react-icons/pi';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

import { Input } from "@/components/ui/input";
import { Button } from './ui/button';
// import logo from 'assets/icons/lg_logo.svg';
import { signupValidationSchema } from '@/lib/validation';
import Loader from './shared/Loader';
// import { createUserAccount } from '@/lib/appwrite/api';
import { useCreateUserAccountMutation, useSignInAccountMutation } from '@/lib/react-query/queryAndMutations';
import { useUserContext } from '@/app/__context__/AuthContext';
import { useRouter } from 'next/navigation';



const SignUp = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const router = useRouter();

  const { mutateAsync: createUserAccount, isPending: isCreatingUser } = useCreateUserAccountMutation();
  const { mutateAsync: signInAccount, isPending: isSigningIn } = useSignInAccountMutation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof signupValidationSchema>>({
    resolver: zodResolver(signupValidationSchema),
    defaultValues: {
      name: '',
      username: '',
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupValidationSchema>) {
    // Do something with the form values.
    const newUser = await createUserAccount(values);
    console.log("newUser", newUser);

    if (!newUser) {
      return toast({ title: "Sign up failed. Please try again.", variant: "destructive" });
    }
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if (!session) {
      return toast({ title: "Sign in failed. Please try again.", variant: "destructive" });
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      router.push('/');
    } else {
      return toast({ title: 'Sign-up failed. Please try again.', variant: "destructive" });
    }

  }

  return (
    <>
      <div className='text-white font-bold flex flex-row items-center mb-4'>
        <Image
            src='/assets/icons/new_logo.svg'
            alt='logo'
            width={140}
            height={170}
        />
      </div>
      <div className='text-white text-center mb-7'>
        <h2 className='font-bold text-xl'>Create your account</h2>
        <p className='font-semibold text-sm text-[#5d606e]'>Welcome! Please enter your details here.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className='w-[300px]'>
                <FormLabel className='text-white'>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Alan Turing" className='dark bg-[#1d1d1d] border-none' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className='w-[300px]'>
                <FormLabel className='text-white'>Username</FormLabel>
                <FormControl>
                  <Input placeholder="AlanTX" className='dark bg-[#1d1d1d] border-none' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  <Input placeholder="Enter your password" type='password' className='dark bg-[#1d1d1d] border-none rounded-r-none focus-visible:border-red' autoComplete='new-password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className={`w-[100%] bg-[#1aa0ff] text-white ${ isCreatingUser ? "hover:bg-[#1aa0ff] cursor-not-allowed" : "hover:bg-[#1871ff]" }`}>
            { isCreatingUser ? (
              <div className='flex items-center gap-2'>
                <Loader />Loading...
              </div>
            ) : "Sign up" }
          </Button>

          <p className='text-small-regular text-light-2 text-center mt-2 text-white'>
            Already have an account? <Link href='/sign-in' className='text-blue-800 hover:text-blue-500 ml-1'>Log in</Link>
          </p>
        </form>
      </Form>
      
    </>
  )
}

export default SignUp