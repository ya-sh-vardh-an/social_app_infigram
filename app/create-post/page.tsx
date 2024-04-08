import PostForm from '@/components/forms/PostForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-1 min-[1215px]:mx-[300px]'>
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

        <PostForm action='Create' />
      </div>
    </div>
  )
}

export default page