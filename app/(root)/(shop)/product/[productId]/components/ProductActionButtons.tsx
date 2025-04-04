"use client"

import Button from '@/components/shared/Button'
import NumberPicker from '@/components/shared/NumberPicker'
import useCartStore from '@/stores/useCartStore';
import React from 'react'

interface ProductActionButtonsProps {
  id: string;
  title: string;
  price: number;
}

export default function ProductActionButtons({id, title, price}: ProductActionButtonsProps) {
  const { addItem } = useCartStore();
  const [value, setValue] = React.useState(1);

  const handleAddToCart = React.useCallback(() => {
    addItem({
      id: id,
      name: title,
      price: price,
      quantity: value
    });
    alert(`Added ${value}x ${title} to cart`);
  }, [id, title, price, value, addItem]);

  return (
    <div className='flex items-center gap-4'>
      <NumberPicker value={value} setValue={setValue} className='w-[120px]'/>
      <Button 
        onClick={handleAddToCart}
        className='w-[160px] justify-center'
      >
        Add to cart
      </Button>
    </div>
  )
}
