import { fetchRandomProductsExceptId } from '@/lib/api';
import React from 'react'
import SuggestedProducts from './SuggestedProducts';

interface SuggestionsProps {
  productId: number;
}

export default async function Suggestions({productId}: SuggestionsProps) {
  const suggestedProducts = (await fetchRandomProductsExceptId(productId)) as ProductType[];

  if (!suggestedProducts || suggestedProducts?.length == 0) {
    return;
  }
  
  return (
    <SuggestedProducts products={suggestedProducts} />
  )
}
