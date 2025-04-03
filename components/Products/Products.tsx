"use client"

import React from 'react'
import useDeviceSize from '@/hooks/use-device-size';
import ItemCard from './ItemCard';
import { useProductsByCategory } from '@/hooks/useProducts';
import { CategoryType } from '@/lib/api';
import NoDataFound from '../error/NoDataFound';
import ProductsSkeleton from './ProductsSkeleton';

interface ProductsProps {
  categoryType: CategoryType;
  items: ProductType[];
}

export default function Products({categoryType, items: initialData}: ProductsProps) {
  const { data, isLoading } = useProductsByCategory(categoryType, initialData);
  const { currSize } = useDeviceSize();

  if (isLoading)
    return <ProductsSkeleton />

  if (!data || data?.length == 0)
    return <NoDataFound />
  
  return (
    <div className='mt-[64px] mx-[24px] flex flex-col gap-[120px] md:mx-[40px] md:mt-[120px] lg:mt-[160px] lg:mx-lg-custom xl:max-w-[1100px] xl:mx-auto'>
      {(data as ProductType[]).map((item, index) => (
        <ItemCard 
          key={item.title} 
          id={item.id}
          title={item.title} 
          image={item.image} 
          description={item.description} 
          isNew={item.isNew}
          currSize={currSize}
          isImageFirst={index % 2 == 0}
        />
      ))}
    </div>
  )
}
