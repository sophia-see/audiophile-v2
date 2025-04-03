"use client"

import useDeviceSize from '@/hooks/use-device-size';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import React from 'react'
import Title from './Title';
import Paragraph from './Paragraph';
import Logo from './Logo';
import NavLinks from './NavLinks';

const SOCIALS = [
  "facebook",
  "twitter",
  "instagram",
]

interface SocialLinksProps {
  className?: string;
}

function SocialLinks ({className}: SocialLinksProps) {
  return (
    <div className={`flex gap-4 items-center ${className || ""}`}>
    {
      SOCIALS.map((social) => (
        <Image
          src={`/assets/shared/desktop/icon-${social}.svg`}
          alt={`${social} icon`}
          width={24}
          height={24}
          key={social}
          className='cursor-pointer filter invert brightness-0 hover:filter-none transition duration-300'
        />
      ))
    }
  </div>
  )
}

export default function Footer() {
  const pathname = usePathname();
  const isCart = pathname.includes("/cart");
  const { currSize } = useDeviceSize();

  return (
    <div>
      {!isCart && (
        <div className='flex flex-col gap-10 mb-[120px] mx-6 md:mx-[40px] lg:flex-row lg:justify-between lg:items-center lg:mx-lg-custom xl:max-w-[1100px] xl:mx-auto'>
          <div className='w-full h-[300px] relative overflow-hidden rounded-[8px] lg:order-last lg:flex-shrink-0 lg:w-[440px] lg:h-[488px] xl:w-[540px] xl:h-[588px]'>
            <Image
              src={`/assets/shared/${currSize}/image-best-gear.jpg`}
              alt='man listening with headphones'
              fill
              className='w-full h-full object-cover object-center'
            />
          </div>
          <div className='flex flex-col gap-8 items-center text-center lg:items-start lg:text-start lg:max-w-[445px]'>
            <Title text={<>Bringing you the <span className='text-brown'>best</span> audio gear</>} />
            <Paragraph text='Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.' />
          </div>
        </div>
      )}
      <div className='bg-[#101010] text-white '>
        <div className='relative w-full px-6  md:px-10 lg:px-lg-custom xl:px-0 xl:mx-auto xl:max-w-[1100px]'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 md:left-[40px] md:translate-x-0 lg:left-lg-custom xl:left-0'>
            <div className='w-[101px] h-[4px] bg-brown' />
          </div>
          <div className='w-full pt-[52px] pb-[38px] flex flex-col items-center text-center  md:items-start md:text-start lg:mx-0'>
            <div className='w-full lg:flex lg:justify-between lg:items-center lg:pb-[36px]'>
              <div className='mx-auto w-fit md:mx-0'>
                <Logo />
              </div>
              <NavLinks className='flex text-white flex-col gap-4 items-center my-12 md:items-start md:flex-row md:gap-[34px] lg:m-0'/>
            </div>
            <div className='w-full lg:flex lg:justify-between lg:items-end'>
              <Paragraph text={`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.`} className='opacity-50 lg:max-w-[540px]'/>
              <SocialLinks className='hidden lg:flex'/>
            </div>
            <div className='w-full md:flex md:justify-between md:items-center'>
              <Paragraph text={`Copyright 2021. All Rights Reserved`} className='opacity-50 my-[48px] flex-shrink-0' />
              <SocialLinks className='w-full justify-center md:w-fit lg:hidden'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
