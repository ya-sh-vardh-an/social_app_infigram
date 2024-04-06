import Image from 'next/image'
import React from 'react'

const Loader = ({ classes }: { classes?: string}) => {
  return (
    <div className={`flex justify-center w-full ${classes}`}>
      <Image
        src='/assets/icons/loader.svg'
        alt='loading'
        width={24}
        height={24} 
      />
    </div>
  )
}

export default Loader