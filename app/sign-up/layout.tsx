import React from 'react'

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='dark flex flex-row'>
      <section className='flex flex-1 flex-col justify-center items-center my-3'>
        {children}
      </section>
    </div>
  )
}

export default SignUpLayout