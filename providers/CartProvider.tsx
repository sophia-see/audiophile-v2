"use client"

import useCartStore from "@/stores/useCartStore"
import { useEffect } from "react"

export default function CartProvider({children}: {children: React.ReactNode}) {
  const { setItems } = useCartStore();

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");

    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [setItems])

  return (
    <>
      {children}
    </>
  )
}
