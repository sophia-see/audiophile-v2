import Title from '@/components/shared/Title'
import{ Suspense } from 'react'
import dynamic from 'next/dynamic';
import { CategoryType } from '@/lib/api/product';
import CategoryProducts from '@/components/shared/CategoryProducts';
import ProductsSkeleton from '@/components/shared/Products/ProductsSkeleton';
import { toTitleCase } from '@/lib/utils';
import NotFound from '@/app/not-found';

const Categories = dynamic(() => import('@/components/shared/Categories'), {
  loading: () => <div>Loading categories...</div>,
});

interface CategoryPageProps {
  params: Promise<{ categoryName: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = (await params).categoryName.toLowerCase();

  if (!Object.values(CategoryType).includes(categoryName as CategoryType)) {
    return <NotFound />
  }

  return (
    <div className='relative'>
      <div className='py-[32px] flex justify-center bg-black text-white md:py-[105px] lg:py-[98px]'>
        <Title text={toTitleCase(categoryName)} />
      </div>

      <Suspense fallback={<ProductsSkeleton />}>
        <CategoryProducts category={categoryName as CategoryType}/>
      </Suspense>

      <Categories className='pt-[120px] pb-[120px] md:mx-[40px] lg:pt-[160px] lg:pb-[160px] lg:mx-lg-custom'/>
    </div>
  )
}