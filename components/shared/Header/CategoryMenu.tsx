import { AnimatePresence, motion } from "framer-motion";
import Categories from "../Categories";

interface CategoryMenuProps {
  isMenuOpen: boolean;
}

export default function CategoryMenu({isMenuOpen}: CategoryMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            className="absolute top-full left-0 right-0 origin-top z-50 backdrop-brightness-10"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} 
          >
            <div 
              className={`
                w-full rounded-b-[8px]
                flex flex-col items-center justify-center
                bg-white py-8 px-6 md:py-14 md:px-10
              `}
            >
              <Categories className='w-full my-0 mx-0 py-0 gap-[16px] md:py-0'/>
            </div>
          </motion.div>
        
        </>
      )}
    </AnimatePresence>
  )
}