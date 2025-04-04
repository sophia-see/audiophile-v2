import BackButton from '@/components/shared/BackButton';
import { Suspense } from 'react';
import Categories from '@/components/shared/Categories';
import ProductDetailsSkeleton from './components/skeletons/ProductDetailsSkeleton';
import SuggestedProductsSkeleton from './components/skeletons/SuggestedProductsSkeleton';
import Suggestions from './components/Suggestions';
import Product from './components/Product';

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt((await params).productId);

  return (
    <div className="mx-[24px] md:mx-[40px] lg:mx-lg-custom xl:mx-auto xl:max-w-[1100px] mt-[16px] md:mt-[33px] lg:mt-[79px]">
      <BackButton />
      
      {/* Render UI immediately while data is loading */}
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <Product params={params} />
      </Suspense>
      
      <Suspense fallback={<SuggestedProductsSkeleton />}>
        <Suggestions productId={productId} />
      </Suspense>
      <Categories className='pt-[120px] pb-[120px] !mx-0 lg:pt-[160px] lg:pb-[160px] lg:mx-lg-custom' />
    </div>
  );
}