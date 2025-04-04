import { Skeleton } from '@/components/ui/skeleton'

function MainDetailsSkeleton () {
  return (
    <div className='mt-[24px] grid grid-cols-1 gap-[32px] md:grid-cols-[281px_1fr] md:gap-[69px] md:items-center lg:mt-[56px] lg:grid-cols-[440px_1fr] xl:grid-cols-[540px_1fr] xl:gap-[125px]'>
      <Skeleton className='mx-auto relative rounded-[8px] overflow-hidden w-full max-sm:aspect-square max-sm:max-w-[400px]  md:h-[480px] lg:h-[460px] xl:h-[560px]' />

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6 md:gap-[17px]'>
          <div className='flex flex-col gap-6'>
            <Skeleton className="h-10 w-full lg:max-w-[280px]" />
            <Skeleton className="h-4 w-full lg:max-w-[350px]" />
            <Skeleton className="h-4 w-full lg:max-w-[350px]" />
            <Skeleton className="h-4 w-full lg:max-w-[350px]" />
            <Skeleton className="h-4 w-full lg:max-w-[50px]" />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Skeleton className="h-6 w-[80px]" />
          <Skeleton className="h-6 w-[120px]" />
        </div>
      </div>
    </div>
  )
}

function OtherDetailsSkeleton () {
  return (
    <div className='grid grid-cols-1 py-[88px] gap-[88px] lg:grid-cols-[1fr_350px]'>
      <div className='flex flex-col gap-6'>
        <Skeleton className="h-10 w-full lg:max-w-[280px]" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className='flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-col'>
        <Skeleton className="h-10 w-full lg:max-w-[280px]" />
        
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}

function ProductGallerySkeleton() {
  return (
    <div className='grid grid-cols-1 gap-[20px] md:grid-cols-[277px_1fr] md:gap-[18px] lg:grid-cols-[445px_1fr] lg:gap-[30px]'>
      <div className='flex flex-col gap-[20px] lg:gap-[32px]'>
        <Skeleton className='relative w-full h-[174px] lg:h-[280px] overflow-hidden rounded-[8px]' />
        <Skeleton className='relative w-full h-[174px] lg:h-[280px] overflow-hidden rounded-[8px]' />
      </div>
      <Skeleton className='relative w-full h-[368px] lg:h-[592px] overflow-hidden rounded-[8px]' />
    </div>
  )
}

export default function ProductDetailsSkeleton() {
  return (
    <div>
      <MainDetailsSkeleton />
      <OtherDetailsSkeleton />
      <ProductGallerySkeleton />
    </div>
  )
}
