"use client"

import Image from 'next/image';
import Button from '@/components/shared/Button';
import Paragraph from '@/components/shared/Paragraph';
import Title from '@/components/shared/Title';
import Link from 'next/link';
import { toProductUrl } from '@/lib/utils';
import NewProductBadge from '../NewProductBadge';
import ItemCardContainer from './ItemCardContainer';

interface ItemCardProps {
  id: number;
  title: string;
  image: ProductImageType;
  description: string;
  isNew?: boolean;
  currSize: string;
  isImageFirst?: boolean;
}


export default function ItemCard (props: ItemCardProps) {
  const {
    id,
    image,
    title,
    description,
    isNew = false,
    currSize,
    isImageFirst = true
  } = props;


  return (
    // <div
    //   className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between"
    // >
    //   <motion.div
    //     ref={ref}
    //     style={{
    //       opacity: opacity,
    //       scale: scale, // Subtle scale-in
    //       y: translateY, // Parallax effect
    //     }}        
    //     className="relative w-full h-[352px] aspect-auto rounded-[8px] overflow-hidden lg:w-[540px] lg:h-[500px]"
    //   >
        // <Image
        //   src={`${image[currSize as keyof ProductImageType].preview}`}
        //   alt={title}
        //   fill
        //   className="object-cover object-center"
        // />
    //   </motion.div>
    //   <div className={`${isImageFirst ? "" : "lg:order-first"} flex flex-col gap-6 items-center text-center lg:w-[345px] xl:w-[445px] lg:text-start lg:items-start`}>
        // {isNew && (
        //   <NewProductBadge />
        // )}
        // <Title text={title} />
        // <Paragraph text={description} />
        // <Link href={toProductUrl(id, title)} prefetch>
        //   <Button>
        //       See Product
        //   </Button>
        // </Link>
    //   </div>
    // </div>
    <ItemCardContainer 
      image={
        <Image
          src={`${image[currSize as keyof ProductImageType].preview}`}
          alt={title}
          fill
          className="object-cover object-center"
        />
      }
      details={
        <>
          {isNew && (
            <NewProductBadge />
          )}
          <Title text={title} />
          <Paragraph text={description} />
          <Link href={toProductUrl(id, title)} prefetch>
            <Button>
                See Product
            </Button>
          </Link>
        </>
      }
      isImageFirst={isImageFirst}
    />
  )
}