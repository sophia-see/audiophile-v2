import Title from '@/components/shared/Title'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import { CategoryType } from '@/lib/api';
import CategoryProducts from '@/components/CategoryProducts';
import ProductsSkeleton from '@/components/Products/ProductsSkeleton';

const Categories = dynamic(() => import('@/components/Categories'), {
  loading: () => <div>Loading categories...</div>,
});

export default async function SpeakerPage() {
  return (
    <div>
      <div className='py-[32px] flex justify-center bg-black text-white md:py-[105px] lg:py-[98px]'>
        <Title text="Speakers" />
      </div>

      <Suspense fallback={<ProductsSkeleton />}>
        <CategoryProducts category={CategoryType.speakers}/>
      </Suspense>

      <Categories className='pt-[120px] pb-[120px] md:mx-[40px] lg:pt-[160px] lg:pb-[160px] lg:mx-lg-custom'/>
    </div>
  )
}
