import React from 'react'

const GridPostLoader = () => {
  return (
    <ul className='grid-container gap-5 animate-pulse'>
        {[0,1,2,3].map((num: number) => (
          <li key={num} className='relative min-w-[20rem] h-80'>
            <div className='flex items-center'>
              <div className='object-cover w-full h-[320px] rounded-[25px] bg-gray-600' />
            </div>
            <div className='grid-post_user'>
                <div className='flex items-center justify-start gap-2'>
                  <div
                    className='h-8 w-8 rounded-full bg-gray-400'
                  />
                  <span className='w-12 h-[12px] lg:w-[100px] lg:h-[20px] bg-gray-500 rounded-xl'/>
                  <p className='line-clamp-1'></p>
                </div>
            </div>

          </li>
        ))}
      </ul>
  )
}

export default GridPostLoader