"use client"

import { MenuIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/contexts/AppContext'
import NavLinks from '../NavLinks'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import CustomUserButton from '../CustomUserButton'
import useCartStore from '@/stores/useCartStore'
import CategoryMenu from './CategoryMenu';
import CartModal from './CartModal';

export default function Header() {
  const { quantity } = useCartStore();
  const { isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen } = useAppContext();
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
              <ShoppingCartIcon className='cursor-pointer stroke-white hover:stroke-brown'  onClick={() => setIsCartOpen(!isCartOpen)}/>
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
        <CategoryMenu isMenuOpen={isMenuOpen}/>
        <CartModal isCartOpen={isCartOpen} />
      </div>
    </header>
  )
}
