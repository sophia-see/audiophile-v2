"use client"

import Button from '@/components/shared/Button';
import Title from '@/components/shared/Title';
import useDeviceSize from '@/hooks/use-device-size';
import { toProductUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface SuggestedProductsProps {
  products: ProductType[];
}

interface ProductCardProps {
  image: string;
  name: string;
  id: number;
}

function ProductCard ({image, name, id}: ProductCardProps) {
  return (
    <div className='flex flex-col gap-[32px] text-center items-center'>
      <div className='w-full h-[120px] bg-gray overflow-hidden rounded-[8px] flex justify-center md:h-[318px] '>
        <div className='relative w-[75px] h-full aspect-auto md:w-full md:px-[45px]'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div className='font-bold text-[24px] tracking-[1.71px] uppercase md:h-[72px] md:flex md:items-center'>
        {name}
      </div>
      <Link href={toProductUrl(id, name)} prefetch>
        <Button>See Product</Button>
      </Link>
    </div>
  )
}

export default function SuggestedProducts({products}: SuggestedProductsProps) {
  const { currSize } = useDeviceSize();
  
  return (
    <div className='pt-[120px] flex flex-col gap-10 lg:pt-[160px]'>
      <Title variant='subtitle' text="You may also like" className='text-center'/>
      <div className='grid grid-cols-1 gap-[56px] md:grid-cols-3 md:gap-[11px] lg:gap-[30px]'>
        {products.map((product) => {
          const image = product.image;
          const imageSize = image ? image[currSize as keyof ProductImageType] : null;
          
          return (
            <ProductCard 
            key={product.id}
            image={imageSize?.preview ?? ""}
            name={product.title ?? ""}
            id={product.id}
            />
          )
        })}
      </div>
    </div>
  )
}
