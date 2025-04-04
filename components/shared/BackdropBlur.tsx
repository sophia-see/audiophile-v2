"use client"

import { useAppContext } from '@/contexts/AppContext';

export default function BackdropBlur() {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  if (!isMenuOpen) return null;

  return (
    <div
      className="absolute inset-0 backdrop-brightness-50 z-40"
      onClick={() => setIsMenuOpen(false)} // Close menu when clicked
    />
  )
}
