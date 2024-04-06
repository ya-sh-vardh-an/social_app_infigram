
import ImageCropProvider from '@/app/__context__/ImageCropper';
import UserProfile from '@/components/shared/UserProfile';
import React from 'react'

export const dynamicParams = true // true | false,

const Profile = ({ params: { id } }: { params: {id : string}}) => {
  return (
    <>
      <ImageCropProvider>
        <UserProfile id={id} />
      </ImageCropProvider>
    </>
  )
}

export default Profile