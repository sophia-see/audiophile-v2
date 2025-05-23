"use client"

import InDevelopmentBanner from '@/components/shared/InDevelopmentBanner';
import useCartStore from '@/stores/useCartStore';

export default function Cart() {
  const { items, total } = useCartStore();

  return (
    <div className='flex flex-col'>
        <InDevelopmentBanner />
      <div>
        Cart
        {items.map((item) => <div key={item.id}>{item.quantity}x {item.name} ({item.price})</div>)}
        {total > 0 && <div>Total: {total}</div>}
      </div>
    </div>
  )
}
