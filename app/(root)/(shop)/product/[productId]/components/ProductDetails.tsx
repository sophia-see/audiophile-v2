"use client"

import dynamic from 'next/dynamic';
import React from 'react'
import MainDetails from './MainDetails';
import OtherDetails from './OtherDetails';
import { useProductById } from '@/hooks/useProducts';
import NoDataFound from '@/components/error/NoDataFound';
import ProductDetailsSkeleton from './skeletons/ProductDetailsSkeleton';

interface ProductDetailsProps {
  id: number; 
  initialData: ProductType;
}


const ProductGallery = dynamic(() => import("./ProductGallery"), {
  loading: () => <div>Loading Gallery...</div>,
});

export default function ProductDetails({ id, initialData }: ProductDetailsProps) {
  const { data, isLoading } = useProductById(id, initialData);

  
  if (isLoading)
    return <ProductDetailsSkeleton />
  
  if (!data || data.length == 0) {
    return <NoDataFound />;
  }
  
  const product = data[0] as ProductType;

  return (
    <>
      <MainDetails 
        isNew={product.isNew}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
      />
      <OtherDetails features={product.features} inclusions={product.inclusions} />
      <ProductGallery image={product.image} />
    </>
  );
}
