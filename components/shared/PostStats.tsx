'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { useDeleteSavedPost, useGetCurrentUser, useLikedPost, useSavePost } from '@/lib/react-query/queryAndMutations';
import { checkIsLiked } from '@/lib/utils';
import Loader from './Loader';
import { Models } from 'appwrite';

import HeartEffect from './HeartEffect';

type PostStatsProps = {
  post?: Models.Document;
  userId: string;
  cardId: string;
}

const PostStats = ({ post, userId, cardId }: PostStatsProps) => {
  const likesList = post?.likes.map((user: Models.Document) => user.$id);

  const [showHearts, setShowHearts] = useState(false);
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(checkIsLiked(likes, userId));

  const { mutate: likePost } = useLikedPost();
  const { mutate: savePost, isPending: isSavingPost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();
  
  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save.find((record: Models.Document) => record.post.$id === post?.$id);

  useEffect(() => {
    setIsSaved(!!savedPostRecord); // works like '' => !'' => !true = false
  }, [currentUser, savedPostRecord])

  useEffect(() => {
    setIsLiked(checkIsLiked(likes, userId));
  }, [likes, userId])


  const handleLikedPost = (event: React.MouseEvent) => {
    event.stopPropagation();
    
    // create list of newLikes
    let newLikes = [...likes];
    // check if user has liked this post
    const hasLiked = newLikes.includes(userId);

    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId);
      setShowHearts(false);
    } else {
      setShowHearts(true);
      newLikes.push(userId);
    }

    setLikes(newLikes);
    likePost({ postId: post?.$id || '', likesArray: newLikes  });
  }

  const handleSavePost = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.stopPropagation();


    if (savedPostRecord) {
      setIsSaved(false);
      deleteSavePost(savedPostRecord.$id);
    } else {
      savePost({ postId: post?.$id || '', userId })
      setIsSaved(true);
    }
  }


  return (
    <div className='flex justify-between items-center z-20 max-h-5 select-none'>
      <div className='flex gap-2 mr-5 items-center'>
        <div 
          className={`inline text-[1.9em] relative cursor-pointer w-[28px] h-[28px] `} 
          onClick={(e) => { 
            handleLikedPost(e); }
          } 
          >
          { !isLiked ? <Image 
            alt='like'
            src={'/assets/icons/like.svg'}
            width={28}
            height={26}
            /> : <Image 
            alt='liked'
            className={`${showHearts ? 'heartE' : isLiked ? 'scale-[160%]' : 'scale-0'} `}
            src={'/assets/icons/liked.svg'}
            width={28}
            height={26}
            />

          }

          {showHearts && <HeartEffect className='relative scale-[400%] top-[-28px]' cardId={cardId} />}
        </div>
        <p className='base-medium lg:base-medium'>{likes.length}</p>
      </div>

      <div className='flex gap-2 mr-5'>
        { isSavingPost ? <Loader classes={'h-[20px] w-[20px]'} /> : <Image
          src={ isSaved ? '/assets/icons/saved.svg' : '/assets/icons/save.svg' }
          alt='likes-heart'
          width={30}
          height={20}
          onClick={handleSavePost}
          className='cursor-pointer'
        />}
      </div>
    </div>
  )
}

export default PostStats