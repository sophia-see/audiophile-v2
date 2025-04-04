"use client"

import Image from 'next/image'
import React from 'react'
import Button from './shared/Button'
import { ChevronRight } from 'lucide-react'
import { motion } from "framer-motion";
import { redirect } from 'next/navigation'

const CATEGORIES = [
  {
    name: "Headphones",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    path: "/category/headphones"
  },
  {
    name: "Speakers",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    path: "/category/speakers"
  },
  {
    name: "Earphones",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    path: "/category/earphones"
  },
]

interface CategoriesProps {
  className?: string;
}

export default function Categories({className}: CategoriesProps) {
  return (
    <div 
      className={`
        pt-[40px] flex flex-col gap-[16px] mx-4 md:py-[96px] md:flex-row md:gap-[10px] lg:py-[120px] xl:gap-[30px] xl:max-w-[1100px] xl:mx-auto
        ${className || ""}
      `}
    >
      {CATEGORIES.map(({ name, image, path }) => (
        <motion.div
          key={name}
          className={`
            w-full relative cursor-pointer 
            pt-[52px]
            group
          `}
          onClick={() => {
            redirect(path)
          }}
          whileHover="hover"
        >
          <div className='absolute top-0 left-1/2 -translate-x-1/2'>
            <motion.div 
              className="w-[150px] h-[150px] origin-bottom group-hover:scale-[103%]"
              initial={{ scale: 1 }}
              variants={{ 
                hover: {scale: 1.3}
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image 
                src={image} 
                alt={name} 
                fill
                className="object-contain"
                loading='lazy'
              />
            </motion.div>
          </div>
          <div className='bg-gray rounded-[8px] flex flex-col items-center pb-[22px]'>
            <div className="mt-[88px] flex flex-col">
              <div className="font-bold text-[15px] tracking-[1.07px] uppercase text-center">{name}</div>
              <Button variant="ghost" icon={ChevronRight} className='group-hover:text-brown'>Shop</Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
