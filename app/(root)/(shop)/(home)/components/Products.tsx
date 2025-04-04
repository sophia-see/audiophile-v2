"use client"

import Button from '@/components/shared/Button'
import Paragraph from '@/components/shared/Paragraph'
import Title from '@/components/shared/Title'
import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import { motion } from "framer-motion"
import { EARPHONES, SPEAKERS } from '@/lib/constants'
import Link from 'next/link'
import { toProductUrl } from '@/lib/utils'

const FEATURED_PRODUCTS = [
  {
    id: SPEAKERS[0].id,
    title: SPEAKERS[0].title,
    featuredDesc: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    image: "image-speaker-zx9.png"
  },
  {
    id: SPEAKERS[1].id,
    title: SPEAKERS[1].title,
    image: "image-speaker-zx7.jpg"
  },
  {
    id: EARPHONES[0].id,
    title: EARPHONES[0].title,
    image: "image-earphones-yx1.jpg"
  },
]

interface ProductsProps {
  products: ProductType[];
}

export default function Products({products}: ProductsProps) {
  const { currSize } = useDeviceSize();

  const featuredProducts = products.length ? products : FEATURED_PRODUCTS;

  return (
    <section 
      className='py-[120px] flex flex-col gap-6 mx-6 md:py-[96px] md:mx-[40px] md:gap-8 lg:mx-lg-custom lg:py-[168px] xl:mx-auto xl:max-w-[1100px]'
    >
      {/* first item */}
      <motion.div
      className={`
        relative 
        py-[55px] px-[24px] 
        flex flex-col items-center gap-8 
        text-white bg-brown 
        rounded-[8px] 
        overflow-hidden
        md:pt-[52px] md:pb-[64px] md:gap-[64px] 
        lg:flex-row lg:pb-0 lg:px-[40px]
        xl-1440:px-[95px]
      `}
      whileHover="hovering" // Triggers the hover animation
    >
      {/* Background Circle - Pulsing Animation on Hover */}
      <motion.div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[558px] h-[558px] aspect-square lg:top-[-10%] lg:left-0 lg:translate-x-[-15%] lg:w-[944px] lg:h-[944px]"
        initial={{ scale: 1}}
        variants={{
          hovering: {
            scale: [1, 1.1, 1], // Scale up and down
            transition: {
              duration: 1.5, // Time for one pulse
              repeat: Infinity, // Repeat indefinitely
              repeatType: "reverse", // Smooth scaling effect
              ease: "easeInOut", // Smooth transition
            },
          },
        }}
      >
        <Image
          src={"/assets/home/desktop/pattern-circles.svg"}
          alt="circles"
          width={600}
          height={600}
          className="w-[558px] h-[558px] lg:w-[944px] lg:h-[944px] aspect-square"
        />
      </motion.div>

      <div className="z-10 w-[172px] h-[200px] relative md:w-[197px] md:h-[237px] lg:w-[310px] lg:h-[393px] xl-1440:w-[410px] xl-1440:h-[493px] lg:absolute lg:left-1/2 lg:-translate-x-[110%] lg:top-1/2 lg:-translate-y-1/2 xl-1440:-translate-x-full xl-1440:top-[102%] xl-1440:-translate-y-full">
        <Image
          src={`/assets/home/desktop/${FEATURED_PRODUCTS[0].image}`}
          alt={featuredProducts[0].title ?? ""}
          fill
          className="aspect-auto"
        />
      </div>

      <div className="z-10 flex flex-col items-center gap-6 text-center md:max-w-[349px] lg:ml-auto lg:text-start lg:items-start lg:pt-[100px] lg:pb-[90px] xl-1440:pt-[133px] xl-1440:pb-[124px]">
        <Title variant="extra" text={featuredProducts[0].title} />
        <Paragraph
          className="opacity-75"
          text={featuredProducts[0].featuredDesc as string}
        />
        <Link href={toProductUrl(parseInt(`${featuredProducts[0].id}`), featuredProducts[0].title ?? "")}>
          <Button variant="black" className="mt-[40px]">
            See Product
          </Button>
        </Link>
      </div>
    </motion.div>

      {/* second item */}
      <div className='w-full h-[327px] relative rounded-[8px] overflow-hidden'>
        <div className='-z-10 absolute inset-0  rounded-[8px] overflow-hidden'>
          <Image
            src={`/assets/home/${currSize}/${FEATURED_PRODUCTS[1].image}`}
            alt={featuredProducts[1].title ?? ""}
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='px-6 flex flex-col gap-8 h-full w-full place-content-center md:px-[62px] lg:px-[95px]'>
          <Title text={featuredProducts[1].title} />
          <Link href={toProductUrl(parseInt(`${featuredProducts[1].id}`), featuredProducts[1].title ?? "")}>
            <Button variant='outline' className='w-fit'>See Product</Button>
          </Link>
        </div>
      </div>

      {/* third item */}
      <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-[11px]'>
        <div className='w-full h-[200px] rounded-[8px] overflow-hidden relative md:h-[320px]'>
          <Image
            src={`/assets/home/${currSize}/${FEATURED_PRODUCTS[2].image}`}
            alt={featuredProducts[2].title ?? ""}
            fill
            className='aspect-auto'
          />
        </div>
        <div className='flex-grow-0 pl-6 flex flex-col gap-8 place-content-center w-full h-[200px] rounded-[8px] bg-gray md:pl-[41px] md:h-[320px] lg:pl-[95px]'>
          <Title text={featuredProducts[2].title} />
          <Link href={toProductUrl(parseInt(`${featuredProducts[2].id}`), featuredProducts[2].title ?? "")}>
            <Button variant='outline' className='w-fit'>See Product</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
