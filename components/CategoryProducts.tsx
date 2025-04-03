import React from 'react'
import Products from '@/components/Products/Products';
import { CategoryType, fetchProducts } from '@/lib/api';

interface CategoryPageProps {
  category: string;
}

export default async function CategoryProducts({category}: CategoryPageProps) {
  const products = (await fetchProducts(CategoryType[category as CategoryType])) as ProductType[];
  
  return (
    <Products categoryType={category as CategoryType} items={products}/>
  )
}
