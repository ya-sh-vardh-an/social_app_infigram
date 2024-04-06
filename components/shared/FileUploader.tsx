import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

import { Button } from '../ui/button';

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
}

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {

  const [file, setFile] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState(mediaUrl)

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    // Do something with the files
    setFile(acceptedFiles);
    fieldChange(acceptedFiles);
    setFileUrl(URL.createObjectURL(acceptedFiles[0]))
  }, [fieldChange])

  const {getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
    }
  })

  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-[#181717] cursor-pointer p-2 border-2 border-dashed'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ? (
          <>
            <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
              <Image 
                src={fileUrl}
                alt='image'
                className='file_uploader-img'
                width={150}
                height={160}
              />
            </div>
            <p className='file_uploader-label'>Click or drag photo to replace</p>
          </>
        ) : (
          <div className='file_uploader-box'>
            <Image 
              src='/assets/icons/file-upload.svg'
              alt='file-upload'
              width={100}
              height={100}
            />
            <h3 className='base-medium text-gray-400'>Drag photo here</h3>
            <p className='text-gray-500 small-regular mb-6'>SVG, PNG, JPG</p>

            <Button className='shad-button_dark_4 bg-[#424040] hover:bg-[#434040]'>
              Select from PC
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default FileUploader