import React from 'react'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductActionButtons from './ProductActionButtons'

interface MainDetailsProps {
  title: string;
  description: string;
  image: ProductImageType;
  price: number;
  isNew?: boolean;
}

export default function MainDetails(props: MainDetailsProps) {
  const { title, description, image, price, isNew } = props;

  return (
    <div className='mt-[24px] grid grid-cols-1 gap-[32px] md:grid-cols-[281px_1fr] md:gap-[69px] md:items-center lg:mt-[56px] lg:grid-cols-[440px_1fr] xl:grid-cols-[540px_1fr] xl:gap-[125px]'>
      <ProductImage
        imageSrcs={image}
        imageAlt={title}
      />
      <div className='flex flex-col gap-8'>
        <ProductDescription 
          isNew={isNew}
          title={title}
          description={description}
          price={price}
        />
        <ProductActionButtons />
      </div>        
    </div>
  )
}
