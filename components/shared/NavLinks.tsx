import { CATEGORIES } from '@/lib/categories';
import Link from 'next/link'

const LINKS = [
  { name: 'Home', path: '/' },
  ...CATEGORIES
]

interface NavLinksProps {
  className?: string;
}

export default function NavLinks ({className}: NavLinksProps) {
  return (
    <ul className={`${className || ""}`}>
      {LINKS.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={`text-white font-bold text-[13px] leading-[25px] tracking-[2px] uppercase hover:text-brown transition duration-300`}
        >
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  )
}
