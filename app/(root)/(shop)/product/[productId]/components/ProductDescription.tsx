"use client"

import NewProductBadge from '@/components/shared/NewProductBadge';
import Paragraph from '@/components/shared/Paragraph';
import Title from '@/components/shared/Title';

interface ProductDetailsProps {
  isNew?: boolean;
  title: string;
  description: string;
  price: number;
}

export default function ProductDescription(props: ProductDetailsProps) {
  const {
    isNew = false,
    title,
    description,
    price
  } = props;

  return (
    <div className='flex flex-col gap-6 md:gap-[17px]'>
      {isNew && <NewProductBadge />}
      <div className='flex flex-col gap-6'>
        <Title text={title} />
        <Paragraph text={description} className='opacity-50'/>
        <div className='font-bold text-[18px] tracking-[1.29px]'>$ {price.toLocaleString()}</div>
      </div>
    </div>
  )
}
