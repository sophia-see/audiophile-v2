"use client"

import Button from '@/components/shared/Button'
import NumberPicker from '@/components/shared/NumberPicker'
import useCartStore from '@/stores/useCartStore';
import { CircleCheck, CircleX } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

interface ProductActionButtonsProps {
  id: string;
  title: string;
  price: number;
}

export default function ProductActionButtons({id, title, price}: ProductActionButtonsProps) {
  const { items, addItem, removeItem } = useCartStore();
  const [value, setValue] = useState<number | undefined | null>(1);

  const cartItem = useMemo(() => {
    return items.find((i) => i.id === id);
  }, [items, id]);

  useEffect(() => {
    if (cartItem) setValue(cartItem.quantity);
  }, [cartItem, setValue]);

  const handleAddToCart = useCallback(() => {
    if (value && value > 0) {
      addItem({
        id: id,
        name: title,
        price: price,
        quantity: value,
      });
      toast.success(`Added ${value}x ${title} to your cart`, {
        icon: <CircleCheck className='text-brown' size={14}/>,
      })
    } else if (value == 0) {
      removeItem(id);
      toast.error(`Removed ${title} from your cart`, {
        icon: <CircleX className='text-brown' size={14}/>,
      })
      setValue(1)
    }
  }, [id, title, price, value, addItem, removeItem]);

  return (
    <div className='flex items-center gap-4'>
      <NumberPicker value={value} setValue={setValue} className='w-[120px]' min={cartItem ? 0 : 1}/>
      <Button
        onClick={handleAddToCart}
        className={`min-w-[160px] w-fit justify-center disabled:opacity-70 disabled:cursor-not-allowed`}
        disabled={value === undefined || value === null || value < 0 || cartItem?.quantity == value}
      >
        {cartItem ? (value ? "Update cart" : value == 0 ? "Remove from cart" : "Update cart") : "Add to cart"}
      </Button>
    </div>
  )
}
