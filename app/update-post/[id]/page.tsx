'use client'

import Image from 'next/image';
import React from 'react';

import PostForm from '@/components/forms/PostForm';
import Loader from '@/components/shared/Loader';
import { useGetPostById } from '@/lib/react-query/queryAndMutations';

function Page({ params: { id } }: { params: { id: string }}) {

  const { data: post, isPending: isLoadingPost } = useGetPostById(id);
  
  if (isLoadingPost) {
    return (
      <Loader />
    )
  }
  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
          <Image
            src='/assets/icons/add-post.svg'
            alt='add'
            width={36}
            height={37}
            />
            <h2 className='h3-bold max-md:h2-bold text-left w-full'>Create Post</h2>
        </div>

        <PostForm action="Update" post={post} />
      </div>
    </div>
  )
}


export default Page