"use client"

import dynamic from 'next/dynamic';
import React from 'react'
import MainDetails from './MainDetails';
import OtherDetails from './OtherDetails';
import { useProductById } from '@/hooks/useProducts';
import NoDataFound from '@/components/error/NoDataFound';
import ProductDetailsSkeleton from './skeletons/ProductDetailsSkeleton';
import { toProductData } from '@/lib/utils';

interface ProductDetailsProps {
  id: number; 
  initialData: ProductDBType;
}


const ProductGallery = dynamic(() => import("./ProductGallery"), {
  loading: () => <div>Loading Gallery...</div>,
});

export default function ProductDetails({ id, initialData }: ProductDetailsProps) {
  const { data, isLoading } = useProductById(id, initialData);
  const formattedProduct = toProductData(data);
  
  if (isLoading)
    return <ProductDetailsSkeleton />
  
  if (!formattedProduct) {
    return <NoDataFound />;
  }
  
  return (
    <>
      <MainDetails 
        id={formattedProduct.id}
        isNew={formattedProduct.isNew}
        title={formattedProduct.title}
        description={formattedProduct.description}
        price={formattedProduct.price}
        image={formattedProduct.image}
      />
      <OtherDetails features={formattedProduct.features} inclusions={formattedProduct.inclusions} />
      <ProductGallery image={formattedProduct.image} />
    </>
  );
}
