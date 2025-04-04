import Paragraph from '@/components/shared/Paragraph';
import Title from '@/components/shared/Title'
import { toParagraph } from '@/lib/utils';

interface OtherDetailsProps {
  features: string;
  inclusions: InclusionType[];
}

export default function OtherDetails({features, inclusions}: OtherDetailsProps) {
  return (
    <div className='grid grid-cols-1 py-[88px] gap-[88px] lg:grid-cols-[1fr_350px]'>
      <div className='flex flex-col gap-6'>
        <Title variant='subtitle' text="Features" />
        {toParagraph(features).map((paragraph, index) => (
            <Paragraph text={paragraph} key={index} className='opacity-50'/>
        ))}
      </div>
      <div className='flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-col'>
        <Title variant='subtitle' text="In the box" className='h-fit'/>
        <div className='flex flex-col gap-2'>
          {inclusions.map((item, index) => (
            <div className='grid grid-cols-[20px_1fr] items-center gap-6' key={index}>
              <Paragraph text={`${item.quantity}x`} className='!font-bold text-brown'/>
              <Paragraph text={item.name} className='opacity-50'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
