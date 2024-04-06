'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { useUserContext } from '@/app/__context__/AuthContext';
import Loader from '@/components/shared/Loader';
import PostStats from '@/components/shared/PostStats';
import { Button } from '@/components/ui/button';
import { useGetPostById } from '@/lib/react-query/queryAndMutations';
import { formatRelativeTime } from '@/lib/utils';

const PostDetails = ({ params: { id } }: { params: { id: string }}) => {

  const { data: post, isPending: isLoadingPost } = useGetPostById(id || '');
  const { user } = useUserContext();

  const handleDeletePost = (event: React.MouseEvent) => {

  }

  return (
    <div className='post_details-container'>
      {isLoadingPost ? <Loader /> : (
        <div className='post_details-card w-full'>
          <Image
            src={post?.imageUrl}
            alt='creator'
            width={400}
            height={400}
            className='post_details-img w-full lg:w-[50%]'
          />
          <div className='post_details-info'>
            <div className='flex-between w-full lg:flex-col'>
              <Link href={`/profile/${post?.creator.$id}`} className='flex items-center gap-3'>
                <Image
                  src={post?.creator?.imageUrl || '/assets/icons.profile-placeholder.svg'} 
                  alt='creator'
                  width={300}
                  height={300}
                  className='rounded-full w-8 h-8 lg:w-12 lg:h-12'
                />
                

                <div className='flex flex-col'>
                  <p className='base-medium lg:body-bold text-gray-400'>
                    {post?.creator.name}
                  </p>
                  <div className='flex-center gap-2 text-gray-500'>
                    <p className='subtle-semibold lg:small-regular'>
                      {formatRelativeTime(post?.$createdAt || '')}
                    </p>
                    -
                    <p className='subtle-semibold lg:small-regular'>
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>

              <div className='flex-center'>
                <Link href={`/update-post/${id}`} className={`${user.id !== post?.creator.$id && 'hidden'}`}>
                  <Image
                    src='/assets/icons/edit.svg'
                    alt='edit-post'
                    width={24}
                    height={24}
                  />
                </Link>

                <Button 
                  onClick={handleDeletePost}
                  variant='ghost'
                  className={`ghost_details-delete-btn ${user.id !== post?.creator.$id && 'hidden'} hover:bg-[#000]`}
                >
                  <Image
                    src='/assets/icons/delete.svg'
                    alt='delete'
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>

            <hr className='border w-full border-[#1b1a1a]' />

            <div className='flex flex-col flex-1 w-full small-medium lg:base-regular'>
              <p>
                {post?.caption}
              </p>
              <ul className='flex gap-2 mt-2 cursor-default'>
                {post?.tags.map((tag: string) => (
                  <li key={tag} className='text-gray-600'>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full'>
              <PostStats key={id} post={post} userId={user.id} cardId={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails