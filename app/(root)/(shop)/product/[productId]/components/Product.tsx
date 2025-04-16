import { fetchProductById } from '@/lib/api/product';
import ProductDetails from './ProductDetails';
import NoDataFound from '@/components/shared/NoDataFound';

interface ProductProps {
  params: Promise<{ productId: string }>;
}

export default async function Product({ params }: ProductProps) {
  const productId = parseInt((await params).productId);
  
  if (isNaN(productId)) {
    return <NoDataFound />
  }

  const productRes = await fetchProductById(productId);

  if (!productRes) {
    return <NoDataFound />
  }

  return (
    <ProductDetails id={productId} initialData={productRes} />
  );
}
