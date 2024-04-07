'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const SinginLayout = ({ children }: { children: React.ReactNode }) => {

  const isAuthenticated: Boolean = false;
  const router: AppRouterInstance = useRouter();

  return (
    <>
      { isAuthenticated ? 
        router.push('/') : (
          <>
          <div className='flex flex-row min-h-[100%] w-full'>
            <section className='flex flex-1 justify-center items-center flex-col '>
              {children}
            </section>

            <Image
              src='/assets/images/aiNeonbg.png'
              alt='logo'
              className='relative xl:black w-1/2 object-cover max-md:hidden'
              width={400}
              height={0}
            />
          </div>
          </>
        )
      }
    </>
  )
}

export default SinginLayout