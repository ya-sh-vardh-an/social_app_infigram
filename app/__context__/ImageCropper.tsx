'use client'

import { Button } from "@/components/ui/button";
import getCroppedImg from "@/lib/cropImage/tools";
import { useEditUserAvatar } from "@/lib/react-query/queryAndMutations";
import { IImageFileCrop } from "@/types";
import React, { createContext, useContext, useState } from "react";
import Cropper from "react-easy-crop";
import { Point, Area, Size } from "react-easy-crop";
import { RxCross1 } from "react-icons/rx";
import { useUserContext } from "./AuthContext";

export const INITIAL_IMAGE_CROPPER = {
  fileUrl: '',
  showCropApp: false,
  file: undefined,
}
const croppedImageSize = 'small';

const IMAGE_FILE_CONTENT = {
  ...INITIAL_IMAGE_CROPPER,
  setFileUrl: () => {},
  setFile: () => {},
  setShowCropApp: () => {},
}

const ImageContext = createContext<IImageFileCrop>(IMAGE_FILE_CONTENT);

const ImageCropProvider = ({ children } : { children: React.ReactNode }) => {

  const { mutateAsync: updateAvatar, isPending: isUpdatingAvatar } = useEditUserAvatar();
  const { user } = useUserContext();
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string>('')
  const [showCropApp, setShowCropApp] = useState<boolean>(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({ width: 0, height: 0, x: 0, y: 0 });
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  
  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    // console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async (croppedAreaPixels: Area, rotation = 0) => {
    try {
      // Get the cropped image in File format
      const croppedImage = await getCroppedImg(
        fileUrl,
        croppedAreaPixels,
        rotation,
      )
      if (croppedImage) {
        // const croppedImageUrl = URL.createObjectURL(croppedImage)
        setFileUrl(URL.createObjectURL(croppedImage));
        // setFile(croppedImage);
        await updateAvatar({ userId: user.id, avatarFile: croppedImage, prevImgId: user.imageId })
      }

      else throw Error;
    } catch (error) {
      console.log(error);
    }
  }
  const size: Size = { width: 150, height: 150 };
  const value = {
    file,
    fileUrl,
    showCropApp,
    setFileUrl,
    setShowCropApp,
    setFile,
  }
  return (
    <ImageContext.Provider value={value}>
      { showCropApp && (
        <div className="flex justify-center items-center absolute w-full h-full border-2 top-0 bottom-0 right-0 left-0 z-40 bg-[#000000bc]">
          <div className="relative w-[350px] h-[350px] object-contain border-[30px] border-b-[70px] border-gray-800 rounded-md bg-gray-700">
            <RxCross1 size={25} className="absolute text-red-500 top-[-25px] right-[-25px] font-bold p-1 neon-effect" onClick={() => setShowCropApp(false)} />
            <Cropper
              image={fileUrl}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape="round"
              />
          <Button variant="ghost" className="relative bottom-[-270px] bg-[#14752e] w-[290px] hover:bg-[#439758] hover:text-white font-semibold" onClick={() => {showCroppedImage(croppedAreaPixels); setShowCropApp(false);}}>Set image as profile pic</Button>
          </div>
        </div>
      )}
      {children}
    </ImageContext.Provider>
  );
};

export default ImageCropProvider;
export const useImageContext = () => useContext(ImageContext);
