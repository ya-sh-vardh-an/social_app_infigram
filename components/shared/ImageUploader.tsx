import React, { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

import { useImageContext } from '../../app/__context__/ImageCropper';

type ImageUploaderProps = {
  props?: any,
}


const ImageUploader = ({ ...field } : ImageUploaderProps) => {

  const { setShowCropApp, setFile, setFileUrl} = useImageContext();
  const onDropAccepted = useCallback((acceptedFiles: FileWithPath[]) => {
    const image = acceptedFiles[0];
    setFile(acceptedFiles[0]);
    setFileUrl(URL.createObjectURL(acceptedFiles[0]))
    setShowCropApp(true);

  }, [setFile, setFileUrl, setShowCropApp])
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noDrag: true,
    onDropAccepted,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
    }
  });

  return (
    <>
      <div className="container p-0 pb-1 z-20 hover:font-medium">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Open File Dialog</p>
        </div>
      </div>
    </>
  )
}

export default ImageUploader