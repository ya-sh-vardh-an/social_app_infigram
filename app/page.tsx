'use client'

import { useUserContext } from './__context__/AuthContext';
import { useRouter } from 'next/navigation';
import HomePosts from '@/components/HomePosts';
// import { useEffect } from 'react';

export default function Home() {

  const { isAuthenticated } = useUserContext();
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     // console.log(isAuthenticated)
  //     console.log('auth', isAuthenticated);
  //     if (!isAuthenticated) {
  //       router.push('/sign-in')
  //     }
  //   }, 6000)

  // }, [isAuthenticated, router])
  
  
  return (
    <>
      <HomePosts />
    </>
  )
}
