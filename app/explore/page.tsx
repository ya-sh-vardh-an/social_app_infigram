'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';

import useDebounce from '@/app/__hooks__/useDebounce'
import GridPostList from '@/components/shared/GridPostList'
import GridPostLoader from '@/components/shared/GridPostLoader'
import Loader from '@/components/shared/Loader'
import SearchResult from '@/components/shared/SearchResult'
import { Input } from '@/components/ui/input'
import { useGetPosts, useSearchPosts } from '@/lib/react-query/queryAndMutations'

const Explore = () => {

  const { ref, inView } = useInView();

  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, 500);
  const { data: searchedPosts, isFetching: isSearchFetching } = useSearchPosts(debouncedValue);
  // console.log("searchedPosts", searchedPosts)
  useEffect(() => {
    if (inView && !searchValue) fetchNextPage();
  }, [fetchNextPage, inView, searchValue])

  if (!posts) {
    return (
      <div className='flex-center m-4 flex-col w-full h-full gap-4'>
        <h2 className='h3-bold md:h2-bold w-full'>Search Posts</h2>
        <GridPostLoader />
      </div>
    )
  }

  const shouldShowSearchResult = searchValue !== '';
  const shouldShowPosts = !shouldShowSearchResult && posts?.pages.every((item) => item?.documents.length === 0)

  return (
    <div className='explore-container'>
      <div className='explore-inner_container'>
        <h2 className='h3-bold md:h2-bold w-full'>Search Posts</h2>
        <div className='flex flex-wrap gap-1 px-4 w-full rounded-lg bg-[#282727]'>
          <Image
            src='/assets/icons/search.svg'
            alt='search'
            width={24}
            height={24}
            className='w-[28px] cursor-pointer'
          />
          <Input 
            type='text'
            placeholder='Search'
            className='explore-search w-[90%]'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div className='flex-between w-full max-w-5xl mt-16 mb-7'>
        <h3 className='body-bold md:h3-bold'>Popular Today</h3>
        <div className='flex-center gap-3 bg-[#282727] rounded-xl px-4 cursor-pointer'>
          <p className='small-medium md:base-medium text-gray-300'>All</p>
          <Image
            src='/assets/icons/filter.svg'
            alt='filter'
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
        {shouldShowSearchResult ? (
          <SearchResult 
            isSearchFetching={isSearchFetching}
            searchedPosts={searchedPosts}
          />
        ) : shouldShowPosts ?  (
          <p className='text-gray-500 mt-10 text-center w-full'>End of posts</p>
        ) : posts?.pages.map((item: any, index: number) => (
          <GridPostList
            key={`page-${index}`}
            posts={item?.documents}
          />
        ))}
      </div>

      { hasNextPage && !searchValue && (
        <div ref={ref} className='mt-10'>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Explore