'use client'

import React, { useState } from 'react'
import Loader from './Loader'
import Image from 'next/image'
import { TbPhotoEdit } from "react-icons/tb";

import { useGetUserById } from '@/lib/react-query/queryAndMutations';
import { useUserContext } from '@/app/__context__/AuthContext';
import UserForm from '../forms/UserForm';
import ImageUploader from './ImageUploader';
import { useImageContext } from '@/app/__context__/ImageCropper';

type UserProfileProps = {
  id: string, 
}

const UserProfile = ({ id } : UserProfileProps) => {

  const { data: userData, isPending: isLoadingUserData } = useGetUserById(id);
  const { user } = useUserContext();

  const [showImgEdit, setShowImgEdit] = useState(false);
  const { fileUrl } = useImageContext();

  if (isLoadingUserData) {
    return (
      <Loader />
      )
    }
    
  return (
    <div className='flex flex-col justify-center items-center w-full font-thin my-7'>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='relative rounded-full'>
          <Image
            src={fileUrl ? fileUrl : userData?.imageUrl}
            alt="avatar"
            width={150}
            height={150}
            className='rounded-full'
            loading='lazy'
            />
            <div className={`dark bg-black absolute border right-[10px] bottom-[2px] w-10 h-10 rounded-full p-[9px] cursor-pointer ${userData?.$id !== user.id && 'hidden'}`} onClick={() => {setShowImgEdit(!showImgEdit)}}>
              <TbPhotoEdit size={20} />
              <div className={`relative w-[200px] showimgedit bg-black p-4 gap-2 text-center font-bold ${showImgEdit ? 'opacity-100 z-10' : 'opacity-0 z-[-1] pointer-events-none'}`}>
                <ImageUploader />
                <p className='border-t-2 pt-1 hover:text-red-500'>Remove the image</p>
              </div>
            </div>
        </div>
        <div className='flex justify-center items-center w-full'>
          <UserForm action={id == user.id ? 'user' : 'guest'} userId={id} />
        </div>
      </div>
    </div>
  )
}

export default UserProfile