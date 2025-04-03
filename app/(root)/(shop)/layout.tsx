import Header from '@/components/shared/Header'
import dynamic from 'next/dynamic'
import React from 'react'

const Footer = dynamic(() => import('@/components/shared/Footer'), {
  loading: () => <div>Loading...</div>,
})

export default function layout ({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>  
  )
}