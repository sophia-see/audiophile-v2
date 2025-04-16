import { fetchRandomProductsExceptId } from '@/lib/api/product';
import SuggestedProducts from './SuggestedProducts';
import { toProductData } from '@/lib/utils';

interface SuggestionsProps {
  productId: number;
}

export default async function Suggestions({productId}: SuggestionsProps) {
  const suggestedProducts = (await fetchRandomProductsExceptId(productId)) as ProductType[];
  const formattedProducts = suggestedProducts.map((product) => toProductData(product) as ProductType);

  if (!formattedProducts || formattedProducts?.length == 0) {
    return;
  }
  
  return (
    <SuggestedProducts products={formattedProducts} />
  )
}
