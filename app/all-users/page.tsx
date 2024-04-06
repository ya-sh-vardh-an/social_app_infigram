'use client'
import Loader from '@/components/shared/Loader';
import UserPostCard from '@/components/shared/UserPostCard';
import { useGetAllUsers } from '@/lib/react-query/queryAndMutations'
import { Models } from 'appwrite';
import React from 'react'

const AllUsers = () => {
  const { data: users, isFetching: isFetchingUsers } = useGetAllUsers();
  return (
    <div className='home-container'>
        <h2 className='home-heading'> All Users</h2>
        {isFetchingUsers ? (
          <Loader /> ) : (
            <ul className='flex flex-col flex-1 gap-9 w-full items-center'>
            {
              users?.documents.map((user: Models.Document) => (
                <UserPostCard key={user.$id} user={user} /> 
              ))
            }
            </ul>
          )}
    </div>
  )
}

export default AllUsers