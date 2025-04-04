import BackdropBlur from '@/components/shared/BackdropBlur'
import Header from '@/components/shared/Header'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@/components/shared/Footer'), {
  loading: () => <div>Loading...</div>,
})

export default function layout ({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className='relative'>
        <main className="flex-1">
          <BackdropBlur />
          {children}
        </main>
        <Footer />
      </div>
    </div>  
  )
}