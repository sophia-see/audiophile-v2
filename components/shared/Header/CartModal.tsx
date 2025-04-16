import { AnimatePresence, motion } from "framer-motion";
import useCartStore from "@/stores/useCartStore";
import CartItem from "./CartItem";
import Button from "../Button";

interface CartModalProps {
  isCartOpen: boolean;
}



export default function CartModal({isCartOpen}: CartModalProps) {
  const { quantity, items, clearCart, total } = useCartStore();
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="absolute top-full max-sm:left-0 right-0 origin-top z-50 backdrop-brightness-10 mx-6 mt-6 md:min-w-[377px]"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} 
          >
            <div 
              className={`
                w-full rounded-[8px]
                flex flex-col gap-6
                bg-white py-8 px-6 md:py-14 md:px-10
              `}
            >
              <div className='flex justify-between items-center'>
                <div className='font-bold text-[18px] tracking-[1.29px] uppercase'>Cart ({quantity})</div>
                <div className='underline text-black/50 font-medium text-[15px] leading-[25px] cursor-pointer' onClick={clearCart}>Remove all</div>
              </div>
              {items.map((item) => <CartItem key={item.id} id={item.id} quantity={item.quantity} />)}
              <div className='flex justify-between items-center'>
                <div className='font-medium text-[15px] leading-[25px] uppercase opacity-50'>Total</div>
                <div className='font-bold text-[18px] uppercase'>$ {total.toLocaleString()}</div>
              </div>
              <Button className="justify-center">Checkout</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}