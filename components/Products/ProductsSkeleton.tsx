import ItemCardContainer from './ItemCardContainer';
import { Skeleton } from '../ui/skeleton';

export default function ProductsSkeleton() {
  
  return (
    <div className='mt-[64px] mx-[24px] flex flex-col gap-[120px] md:mx-[40px] md:mt-[120px] lg:mt-[160px] lg:mx-lg-custom xl:max-w-[1100px] xl:mx-auto'>
      {(new Array(3).fill(0)).map((_, index) => (
        <ItemCardContainer
          key={index}
          image={<Skeleton className='w-full h-full'/>}
          details={
            <>
              <Skeleton className="h-10 w-full lg:max-w-[280px]" />
              <Skeleton className="h-4 w-full lg:max-w-[280px]" />
              <Skeleton className="h-4 w-full lg:max-w-[280px]" />
              <Skeleton className="h-4 w-full lg:max-w-[280px]" />
              <Skeleton className="h-6 w-[100px] lg:max-w-[280px]" />
            </>
          }
          isImageFirst={index % 2 == 0}
        />
      ))}
    </div>
  )
}
