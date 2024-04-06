'use client'
import { useGetRecentPosts } from '@/lib/react-query/queryAndMutations';
import React from 'react'
import { Models } from 'appwrite';
import PostCard from './shared/PostCard';
import PostCardLoader from './shared/PostCardLoader';
import HeartEffect from './shared/HeartEffect';

const HomePosts = () => {
  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();

  return (
    <div className='home-container'>
      <h2 className='home-heading'>
        Home Feed
      </h2>
      { isPostLoading && !posts ? (
        <ul className='flex flex-col flex-1 items-center gap-9 w-full'>
          { [0, 1].map((num) => (
            <PostCardLoader key={num} />
            )) }
        </ul>
        ) : (
        <ul className='flex flex-col flex-1 items-center gap-9 w-full'>
          { posts?.documents.map((post: Models.Document, idx: number) => (
            <PostCard key={`${idx}`} id={idx} cardId={post.$id} post={post} />
          )) }
        </ul>
      )}
      {/* <HeartEffect height={34} width={34} /> */}

    </div>
  )
}

export default HomePosts