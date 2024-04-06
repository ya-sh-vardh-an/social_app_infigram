'use client'

import Image from 'next/image';
import React from 'react';

import { useGetAllUsers } from '@/lib/react-query/queryAndMutations'

const RightSidebar = () => {
  const { data: users, isFetching: isFetchingUsers} = useGetAllUsers();
  return (
    <div className='rightsidebar'>
      <div className='font-bold text-gray-500 text-[1.2rem] text-center'>Recent Users</div>
      <ul className='flex flex-wrap justify-start pl-1 pt-5 gap-5'>
        { !isFetchingUsers && users ? users.documents?.map((user, idx) => (
          <li key={idx}>
            <Image
              src={user.imageUrl}
              alt='avatar'
              height={50}
              width={50}
              className='rounded-full border-2 border-gray-600'
            />
          </li>
        )) : [0,1,2].map(id => (
          <li key={id} className='h-[50px]'>
            <div className='rounded-full bg-gray-600 w-[50px] h-[50px] animate-pulse'>

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RightSidebar