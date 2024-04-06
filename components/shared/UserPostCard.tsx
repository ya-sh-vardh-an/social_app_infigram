'use client'

import { Models } from 'appwrite';
import Image from 'next/image';
import React, { useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";

type UserPostCard = {
  user: Models.Document,
}

const UserPostCard = ({ user } : UserPostCard) => {
  const [showBio, setShowBio] = useState(false)

  const parentStyle = {
    height: showBio ? 'auto' : '100px',
    overflow: 'hidden',
    transition: 'height 3s ease',
  };

  const hiddenStyle = {
    height: showBio ? '100px' : '0',
    overflow: 'hidden',
  };
  return (
    <div className={`flex flex-col w-full p-6 max-w-screen-sm bg-[#171f2cc4] rounded-2xl group overflow-hidden md:parent_element ${showBio ? 'h-[200px] group-[hidden]:visible' : 'h-[90px]'} md:hover:bg-gray-800 md:hover:translate-y-[0.01rem] md:hover:scale-[1.05] box-border`} onClick={() => setShowBio(!showBio)}>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row  w-full rounded-2xl items-center'>
          <div className='flex flex-col cursor-pointer'>
            <Image
              src={user?.imageUrl}
              alt='user-image'
              width={20}
              height={20}
              className='rounded-full w-12 h-12' 
            />
          </div>
          <div className='ml-4 leading-5 cursor-default'>
            <h2 className='font-semibold'>{user?.username}</h2>
            <p className='text-gray-500'>{user?.name}</p>
          </div>
        </div>
        <div className={`cursor-pointer ${showBio && 'rotate-180 translate-y-[-10px]'} transition-transform delay-100 ease-in-out duration-400`}>
            <IoIosArrowDown size={30} className={`text-[#1aa0ff] md:group-hover:animate-bounce ${showBio ? 'text-[#276d9f] group-hover:animate-none' : ''} transition-colors delay-100 ease-in-out duration-400` }/>
        </div>
      </div>
      <div className={`p-2 ml-6 mt-5 cursor-default group-[hidden]:hidden ${showBio && 'overflow-y-scroll custom-scrollbar '} transition-all ease-in-scroll duration-25 pb-1`}>
        <h2 className='font-bold text-gray-400'>Bio:</h2>
        <p className='text-gray-600 pl-2'>{user?.bio ? user?.bio : `In the vast tapestry of existence, one individual's journey can be as unpredictable as a cosmic dance. Such is the narrative of [Your Name], a soul navigating the labyrinth of life with resilience, curiosity, and an insatiable thirst for experience.

Born under the open skies of [Birthplace] on a crisp morning, [Your Name] kicked off their earthly sojourn with an infectious enthusiasm that would characterize their every endeavor. From early childhood, it was evident that this individual possessed a unique blend of creativity and analytical prowess, a concoction that would shape their multifaceted life.`}</p>
      </div>
    </div>
  )
}

export default UserPostCard