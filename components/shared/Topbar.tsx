'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button'
import { useSignOutAccountMutation } from '@/lib/react-query/queryAndMutations';
import { useUserContext } from '@/app/__context__/AuthContext';


const Topbar = () => {

  const { mutate: signout, isSuccess } = useSignOutAccountMutation();
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      router.push('/sign-in')
    }
  }, [isSuccess, router])

  return (
    <section className={`topbar blue-glassmorphism border-4 border-red-600`}>
      <div className='flex-between py-4 px-5 w-full'>
        <Link href='/' className='flex gap-1 items-center'>
          <Image
            src='/assets/icons/new_logo.svg'
            alt='logo'
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className='flex gap-4'>
          <Button className='p-2 shad-button-ghost hover:bg-[#ededed2f]' variant='ghost' onClick={() => signout()}>
            <Image
              src='/assets/icons/logout.svg' 
              alt='logout'
              width={25}
              height={25}
            />
          </Button>
          <Link href={`/profile/${user.id}`} className='flex-center gap-3'>
            <Image 
              src={ user.imageUrl || '/assets/icons/profile-placeholder.svg' }
              alt='user-profile'
              width={25}
              height={25}
              className='rounded-full'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar