"use client"

import useDeviceSize from '@/hooks/use-device-size';
import Image from 'next/image';
import React from 'react'

interface SmallImageProps {
  src: string;
  alt: string;
}

function SmallImage ({src, alt}: SmallImageProps) {
  return (
    <div className='relative w-full h-[174px] lg:h-[280px] overflow-hidden rounded-[8px]'>
        <Image 
          src={src}
          alt={alt}
          className='object-cover object-center'
          fill
        />
    </div>
  )
}

interface ProductGalleryProps {
  image: ProductImageType;
}

export default function ProductGallery({image}: ProductGalleryProps) {
  const { currSize } = useDeviceSize();

  return (
    <div className='grid grid-cols-1 gap-[20px] md:grid-cols-[277px_1fr] md:gap-[18px] lg:grid-cols-[445px_1fr] lg:gap-[30px]'>
      <div className='flex flex-col gap-[20px] lg:gap-[32px]'>
        <SmallImage
          src={image[currSize as keyof ProductImageType].gallery?.at(0) as string}
          alt='First image gallery'
        />
        <SmallImage
          src={image[currSize as keyof ProductImageType].gallery?.at(1) as string}
          alt='Second image gallery'
        />
      </div>
      <div className='relative w-full h-[368px] lg:h-[592px] overflow-hidden rounded-[8px]'>
        <Image 
          src={image[currSize as keyof ProductImageType].gallery?.at(2) as string}
          alt='Third image gallery'
          className='object-cover object-center'
          fill
        />
      </div>
    </div>
  )
}
