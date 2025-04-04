"use client"

import useDeviceSize from '@/hooks/use-device-size';
import Image from 'next/image'

interface ProductImageProps {
  imageSrcs: ProductImageType;
  imageAlt: string;
}

export default function ProductImage({imageSrcs, imageAlt}: ProductImageProps) {
  const { currSize } = useDeviceSize();

  return (
    <div className='mx-auto relative rounded-[8px] overflow-hidden w-full max-sm:aspect-square max-sm:max-w-[400px]  md:h-[480px] lg:h-[460px] xl:h-[560px]'>
      <Image
        src={imageSrcs[currSize as keyof ProductImageType].full}
        alt={imageAlt}
        fill
        className='object-cover object-center'
        priority={true}
      />
    </div>
  )
}
