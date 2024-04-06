import { Models } from 'appwrite';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { useUserContext } from '@/app/__context__/AuthContext';
import { formatRelativeTime } from '@/lib/utils';
import PostStats from './PostStats';

type PostCardProps = {
  post: Models.Document;
  key?: string,
  cardId: string,
  id: number
}

const PostCard = ({ post, id, cardId }: PostCardProps) => {

  const { user } = useUserContext();

  if (!post.creator) {
    // toast({ title: 'Failed to fetch the data. Please try again.', variant: "destructive"});
    return;
  } 

  return (
    <li key={`${id}`} className='post-card'>
      <div className='flex-between'>
        <div className='flex items-center gap-3'>
          <Link href={`/profile/${post.creator.$id}`}>
            <Image
              src={post.creator?.imageUrl || '/assets/icons.profile-placeholder.svg'} 
              alt='creator'
              width={20}
              height={20}
              className='rounded-full w-12 lg:h-12'
            />  
          </Link>

          <div className='flex flex-col'>
            <p className='base-medium lg:body-bold text-gray-400'>
              {post.creator.name}
            </p>
            <div className='flex-center gap-2 text-gray-500'>
              <p className='subtle-semibold lg:small-regular'>
                {formatRelativeTime(post.$createdAt)}
              </p>
              -
              <p className='subtle-semibold lg:small-regular'>
                {post.location}
              </p>
            </div>
          </div>
        </div>

        <Link href={`/update-post/${post.$id}`} className={`${ user.id !== post.creator.$id && 'hidden'}`}>
          <Image 
            src='/assets/icons/edit.svg'
            alt='edit'
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link href={`/posts/${post.$id}`}>
        <div className='small-medium lg:base-medium py-5'>
          <p>
            {post.caption}
          </p>
          <ul className='flex gap-2 mt-2'>
            {post.tags.map((tag: string) => (
              <li key={tag} className='text-gray-600'>
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={post.imageUrl || '/assets/icons/profile-placeholder.svg'}
          alt='post-image'
          width={250}
          height={250}
          className='post-card_img' 
        />
      </Link>

      <PostStats post={post} key={`${id}`} userId={user.id} cardId={cardId} />
    </li>
  )
}

export default PostCard