"use client"

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter();

  return (
    <div 
      className='cursor-pointer opacity-50 text-black font-medium text-[15px] leading-[25px] hover:opacity-100 hover:text-brown transition duration-100'
      onClick={() => router.back()}
    >
      Go Back
    </div>
  )
}
