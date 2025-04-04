import { Skeleton } from '@/components/ui/skeleton'

export default function SuggestedProductsSkeleton() {
  return (
    <div className='w-full pt-[120px] flex flex-col gap-10 lg:pt-[160px]'>
      <div className='w-full flex justify-center'>
      <Skeleton className="h-10 w-full lg:max-w-[280px] text-center" />

      </div>
      <div className='w-full grid grid-cols-1 gap-[56px] md:grid-cols-3 md:gap-[11px] lg:gap-[30px]'>
        <Skeleton className="h-[120px] md:h-[318px] w-full text-center" />
        <Skeleton className="h-[120px] md:h-[318px] w-full text-center" />
        <Skeleton className="h-[120px] md:h-[318px] w-full text-center" />
      </div>
    </div>
  )
}
