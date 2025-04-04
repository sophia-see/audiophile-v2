import Link from 'next/link'
import React from 'react'

const LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Headphones', href: '/category/headphones' },
  { name: 'Speakers', href: '/category/speakers' },
  { name: 'Earphones', href: '/category/earphones' },
]

interface NavLinksProps {
  className?: string;
}

export default function NavLinks ({className}: NavLinksProps) {
  return (
    <ul className={`${className || ""}`}>
      {LINKS.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={`text-white font-bold text-[13px] leading-[25px] tracking-[2px] uppercase hover:text-brown transition duration-300`}
        >
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  )
}
