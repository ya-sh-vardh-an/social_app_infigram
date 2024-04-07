'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';

// import { useUserContext } from '@/app/__context__/AuthContext';
import { useGetCurrentUser, useSignOutAccountMutation } from '@/lib/react-query/queryAndMutations';
import { INavLink } from '@/types';
import { sidebarLinks } from '@/constants';
import { Button } from '../ui/button';

const LeftSideBar = () => {
  const { mutate: signout, isSuccess } = useSignOutAccountMutation();
  const router = useRouter();
  const pathname = usePathname();
  // const { user, isLoading } = useUserContext();
  const { data: cUser, isLoading: loadingUser } = useGetCurrentUser();

  useEffect(() => {

    if (isSuccess) {
      router.push('/sign-in')
    }
  }, [isSuccess, router])

  return (
    <nav className={`leftsidebar`}>
      <div className='flex flex-col gap-11'>
        <Link href='/' rel="prefetch" className='flex gap-1 items-center'>
          <Image
            src='/assets/icons/new_logo.svg'
            alt='logo'
            width={170}
            height={170}
            priority
          />
        </Link>
        <Link href={`/profile/${cUser?.$id}`} className='flex gap-3 items-center'>
          <Image 
            src={ cUser?.imageUrl || '/assets/icons/profile-placeholder.svg' }
            alt='user-profile'
            width={25}
            height={25}
            className='h-14 w-14 rounded-full' 
          />
          { loadingUser ? (
          <div className='flex flex-col'>
            <div className='body-bold'>
              <div className='bg-gray-600 w-[120px] h-[18px] animate-pulse rounded-md' />
            </div>
            <div className='small-regular text-gray-400'>
              <div className='bg-gray-500 mt-3 w-[100px] h-[15px] animate-pulse rounded-md' />
            </div>
          </div>

          ) : (
            <div className='flex flex-col'>
              <p className='body-bold'>
                { cUser?.username }
              </p>
              <p className='small-regular text-gray-400'>
                { `@${cUser?.name}` }
              </p>
            </div>
          )}
        </Link>

        <ul className='flex flex-col gap-6 mb-7'>
          { sidebarLinks.map((link: INavLink, idx: number) => {
            const isActive = pathname === link.route
            return (
              <li key={link.label} className={`leftsidebar-link p-1 w-inherited box-border w-full group ${ isActive && 'bg-blue-500'}`}>
                <Link href={link.route} className='flex gap-4 item-center p-2' prefetch>
                  <Image 
                    src={link.imgURL}
                    alt={link.label}
                    width={20}
                    height={20}
                    className={`fill-white group-hover:invert-white ${ isActive && 'invert-white' }`}
                  />
                  {link.label}
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>

      <Button className='p-2 shad-button-ghost justify-start ml-2 group hover:bg-[#d9525227] transition hover:text-white' variant='ghost' onClick={() => signout()}>
        <Image
          src='/assets/icons/logout.svg' 
          alt='logout'
          width={25}
          height={25}
          className='group-hover:invert-white'
        />
        <p className='small-medium lg:base-medium ml-1'>Logout</p>
      </Button>
    </nav>
  )
}

export default LeftSideBar