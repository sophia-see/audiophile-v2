import Header from '@/components/shared/Header'
import React from 'react'

export default function layout ({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>  
  )
}