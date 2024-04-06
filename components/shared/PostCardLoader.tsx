import React from 'react'

const PostCardLoader = () => {
  return (
    <div className='post-card'>
      <div className='flex-between'>
        <div className='flex items-center gap-3 animate-pulse'>
          <span className='rounded-full w-10 h-10 lg:w-12 lg:h-12 bg-gray-400'/>
          
          <div className='flex flex-col'>
            <span className='w-12 h-[12px] lg:w-[100px] lg:h-[20px] bg-gray-500 rounded-xl'/>
            <div className='flex-center gap-2 text-gray-500'>
              <span className='w-5 h-[7px] lg:w-8 lg:h-[15px] bg-gray-600 rounded-xl'/>
              -
              <span className='w-5 h-[7px] lg:w-8 lg:h-[15px] bg-gray-600 rounded-xl'/>
            </div>
          </div>
        </div>

      </div>

      <div>

        <div className='small-medium lg:base-medium py-5 gap-2 animate-pulse'>
          <div className='w-[35%] h-[12px] bg-gray-400 mb-1 rounded-xl'/>
          <div className='w-[45%] h-[8px] bg-gray-600 rounded-xl'/>
        </div>

        <div className='post-card_img bg-gray-700 animate-pulse' />
      </div>

      
    </div>
  )
}

export default PostCardLoader