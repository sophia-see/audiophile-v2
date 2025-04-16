"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import NumberPicker from "../NumberPicker";
import { useProductById } from "@/hooks/useProducts";
import LoadingCircleSpinner from "../Loader";
import useDeviceSize from "@/hooks/use-device-size";
import NoDataFound from "../NoDataFound";
import { toProductData, toProductUrl } from "@/lib/utils";
import useCartStore from "@/stores/useCartStore";
import { toast } from "sonner";
import { CircleCheck, CircleX } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import Link from "next/link";

interface CartItemProps {
  id: string;
  quantity: number;
}

export default function CartItem ({id, quantity}: CartItemProps) {
  const { data, isLoading } = useProductById(parseInt(id));
  const { currSize } = useDeviceSize();
  const { addItem, removeItem } = useCartStore();
  const [value, setValue] = useState<number | undefined | null>(quantity);
  const debouncedValue = useDebounce(value, 500);
  const didMount = useRef(false);

  const formattedProduct = toProductData(data);
  const { title, image, price } = formattedProduct || {};

  const handleAddToCart = useCallback(() => {
    if (!formattedProduct) return;

    if (debouncedValue && debouncedValue > 0) {
      addItem({
        id: id,
        name: title!,
        price: price!,
        quantity: debouncedValue
      });
      toast.success(`Added ${debouncedValue}x ${title} to your cart`, {
        icon: <CircleCheck className='text-brown' size={14} />,
      });
    } else if (debouncedValue == 0) {
      removeItem(id);
      toast.error(`Removed ${title} from your cart`, {
        icon: <CircleX className='text-brown' size={14} />,
      });
      setValue(1);
    }
  }, [id, title, price, debouncedValue, addItem, removeItem, formattedProduct]);

  useEffect(() => {
    if (didMount.current) {
      if (debouncedValue !== undefined && debouncedValue !== null && debouncedValue !== quantity) {
        handleAddToCart();
      }
    } else {
      didMount.current = true;
    }
  }, [debouncedValue, handleAddToCart, quantity]);

  if (isLoading) return <LoadingCircleSpinner size="small"/>;
  if (!formattedProduct) return <NoDataFound />;

  return (
    <div className="grid grid-cols-[1fr_96px] gap-5 items-center">
      <div className="grid grid-cols-[64px_1fr] gap-4">
        <div className="w-[64px] h-[64px] bg-gray rounded-[8px] relative overflow-hidden">
          <Image
            src={image ? image[currSize as keyof typeof image].preview as string : ""}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col">
          <Link href={toProductUrl(parseInt(id), title)}>
            <div className="font-bold text-[15px] leading-[25px] hover:text-brown transition duration-200">
              {title}
            </div>
          </Link>
          <div className="font-bold text-[14px] leading-[25px] opacity-50">
            $ {price.toLocaleString()}
          </div>
        </div>
      </div>
      <NumberPicker value={value} setValue={setValue} size="small" />
    </div>
  );
}
