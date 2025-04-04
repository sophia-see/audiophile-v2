import React from 'react'
import Products from '@/components/Products/Products';
import { CategoryType, fetchProducts } from '@/lib/api';
import { toProductData } from '@/lib/utils';

interface CategoryPageProps {
  category: string;
}

export default async function CategoryProducts({category}: CategoryPageProps) {
  const products = (await fetchProducts(CategoryType[category as CategoryType])) as ProductType[];
  const formatProducts = products.map((product) => toProductData(product) as ProductType);
  
  return (
    <Products categoryType={category as CategoryType} items={formatProducts}/>
  )
}
