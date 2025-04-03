import Header from '@/components/shared/Header'
import React from 'react'

export default function layout ({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center xl:items-start xl:pt-[100px] min-h-screen w-full ">
        {children}
      </main>
    </div>  
  )
}