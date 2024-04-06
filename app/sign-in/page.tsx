'use client'

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React from 'react';

import Signin from '@/components/sign-in';


const SigninForm = () => {
  const isAuthenticated: Boolean = false;
  const router: AppRouterInstance = useRouter();

  return (
    <>
      <Signin />
    </>
  )
}

export default SigninForm

// add providers email, google, linkedin