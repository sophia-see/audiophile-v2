"use client"

import { MenuIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion";
import Categories from '../Categories'
import { useAppContext } from '@/contexts/AppContext'
import NavLinks from './NavLinks'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import CustomUserButton from './CustomUserButton'
import useCartStore from '@/stores/useCartStore'


export default function Header() {
  const { quantity } = useCartStore();
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={`
          relative

        ${isHome ? "" : "bg-black"} 
      `}
    >
      <div
        className={`
          py-8 px-6 md:px-10
          flex items-center gap-4 md:gap-[42px] xl:gap-[197px]
          border-b-[1px] border-white/10
          xl:px-0 xl:max-w-[1100px] xl:mx-auto
          relative
        `}
      >
        <MenuIcon className='stroke-white lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        <Logo />
        <NavLinks className='hidden lg:flex gap-[34px] '/>
        <div className='flex items-center gap-4 ml-auto'>
          <div className='relative'>
            <div className={`${!quantity && "hidden"} absolute h-4 w-4 text-xs bg-brown rounded-full text-white flex items-center justify-center -top-2 -right-2`}>
              {quantity}
            </div>
            <Link href={"/cart"}>            
              <ShoppingCartIcon className='stroke-white hover:stroke-brown'/>
            </Link>
          </div>
          <SignedIn>
              {/* <UserIcon className='stroke-white hover:stroke-brown'/> */}
              <CustomUserButton />
                {/* <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Orders"
                    labelIcon={<Package size={14}/>}
                    href="/my-orders"
                  />
                  <UserButton.Action label="manageAccount"/>
                  <UserButton.Action label="signOut" />
                </UserButton.MenuItems> */}
              {/* </CustomUserButton> */}
          </SignedIn>
          <SignedOut>
            <Link href={"/sign-in"}>            
              <UserIcon className='stroke-white hover:stroke-brown'/>
            </Link>
          </SignedOut>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              
              <motion.div
                className="absolute top-full left-0 right-0 origin-top z-50 backdrop-brightness-10"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }} 
              >
                <div 
                  className={`
                    w-full rounded-b-[8px]
                    flex flex-col items-center justify-center
                    bg-white py-8 px-6 md:py-14 md:px-10
                  `}
                >
                  <Categories className='w-full my-0 mx-0 py-0 gap-[16px] md:py-0'/>
                </div>
              </motion.div>
            
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
