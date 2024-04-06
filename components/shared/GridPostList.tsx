import { Models } from 'appwrite';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { useUserContext } from '@/app/__context__/AuthContext';
import PostStats from './PostStats';

type GridPostListProps = {
  posts: Models.Document[],
  showUser?: boolean,
  showStats?: boolean,
}
const GridPostList = ({ posts, showUser = true, showStats = true }: GridPostListProps) => {
  // console.log("posts", posts);
  const { user } = useUserContext();

  return (
    <>
      <ul className='grid-container'>
        {posts.map((post: any) => (
          <li key={post.$id} className='relative min-w-[20rem] h-80'>
            <Link
              href={`/posts/${post.$id}`} 
              className='flex items-center'
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                width={400}
                height={320}
                className='object-cover w-full h-[320px] rounded-[25px]'
              />
            </Link>
            <div className='grid-post_user'>
              { showUser && (
                <div className='flex items-center justify-start gap-2'>
                  <Image
                    src={post.creator.imageUrl}
                    alt='creator'
                    width={400}
                    height={20}
                    className='h-8 w-8 rounded-full'
                  />
                  <p className='line-clamp-1'>{post.creator.name}</p>
                </div>
              )}
              {showStats && <PostStats key={post.$id} post={post} userId={user.id} cardId={post.$id} />}
            </div>

          </li>
        ))}
      </ul>
    </>
  )
}

export default GridPostList