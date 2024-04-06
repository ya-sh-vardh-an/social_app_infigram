'use client'

import { Models } from 'appwrite';
import React from 'react'

import { useUserContext } from '@/app/__context__/AuthContext';
import PostCard from '@/components/shared/PostCard';
import PostCardLoader from '@/components/shared/PostCardLoader';
import { useGetSavesByUser } from '@/lib/react-query/queryAndMutations';

const Saved = () => {
  const { user } = useUserContext();
  const { data: savePost, isFetching: isFetchingPost, isLoading: isLoadingSaves } = useGetSavesByUser(user.id);

  return (
    <div className='home-container'>
      <h2 className='home-heading'>
        Saved Posts
      </h2>
      { isFetchingPost && !savePost ? (
        <ul className='flex flex-col flex-1 items-center gap-9 w-full'>
        { [0, 1].map((num) => (
          <PostCardLoader key={num} />
        )) }
        </ul>
        ) : (
        <ul className='flex flex-col flex-1 items-center gap-9 w-full'>
          { savePost?.map((save: Models.Document, idx) => (
            <PostCard key={save.post.$id} id={idx} post={save.post} cardId={save.post.$id} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Saved