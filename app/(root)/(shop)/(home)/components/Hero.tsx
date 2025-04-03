"use client"

import Button from '@/components/shared/Button'
import Paragraph from '@/components/shared/Paragraph'
import Title from '@/components/shared/Title'
import useDeviceSize from '@/hooks/use-device-size'
import { HEADPHONES } from '@/lib/constants'
import { toProductUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FEATURED_PRODUCT = {
  id: HEADPHONES[0].id,
  title: HEADPHONES[0].title,
  featuredDesc: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  image: "image-header.jpg"
}

interface HeroProps {
  product: ProductType | null | undefined;
}

export default function Hero({product}: HeroProps) {
  const { currSize } = useDeviceSize();
  const [showImage, setShowImage] = React.useState(false);

  // delay show image to avoid sudden shift of image size (let currsize finalize first)
  React.useEffect(() => {
    const timeout = setTimeout(() => setShowImage(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const featuredProduct = product ?? FEATURED_PRODUCT;

  return (
    <section className="flex justify-center lg:justify-start xl:max-w-[1100px] xl:mx-auto h-[calc(700px-90px)] md:h-[calc(729px-90px)]">
      <div className='bg-[#191919] brightness-[65%] w-full h-[700px] absolute left-0 right-0 top-[-100px] -z-10 md:h-[729px]'>
        {showImage && <Image
          src={`/assets/home/${currSize}/${FEATURED_PRODUCT.image}`}
          alt='black headphones'
          fill
          className='object-cover object-center mix-blend-normal xl:mx-auto xl:max-w-[1440px]'
          priority
        />}
      </div>
      <div 
        className={`
          my-[108px] mx-[24px] 
          text-center text-white 
          md:max-w-[379px] 
          lg:mx-0 lg:text-start lg:ml-lg-custom 
          xl:mx-0
        `}
        >
        <div className='opacity-50 text-[14px] tracking-[10px] uppercase'>New Product</div>
        <Title 
          variant='extra' 
          text={featuredProduct.title}
          className='mt-[16px] mb-[24px] md:mt-[24px]'
        />
        <Paragraph 
          text={featuredProduct.featuredDesc ?? ""}
          className='opacity-75'  
        />
        <Link href={toProductUrl(parseInt(`${featuredProduct.id}`), featuredProduct.title ?? "")}>
          <Button className='mx-auto mt-[28px] md:mt-[40px] lg:mx-0'>See Product</Button>
        </Link>
      </div>
    </section>
  )
}
