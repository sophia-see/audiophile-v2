"use client"

import useCartStore from '@/stores/useCartStore';
import React from 'react'

export default function Cart() {
  const { items, total } = useCartStore();

  return (
    <div>
      Cart
      {items.map((item) => <div key={item.id}>{item.quantity}x {item.name} ({item.price})</div>)}
      {total > 0 && <div>Total: {total}</div>}
    </div>
  )
}
