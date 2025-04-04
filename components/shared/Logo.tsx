"use client"

import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Logo() {
  return (
    <Image
      src={"/assets/shared/desktop/logo.svg"}
      alt="audiophile logo"
      width={143}
      height={24}
      loading='lazy'
      onClick={() => redirect("/")}
      className='cursor-pointer'
    />
  )
}
