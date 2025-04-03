"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface ItemCardContainerProps {
  image: React.ReactNode;
  details: React.ReactNode;
  isImageFirst?: boolean;
}

export default function ItemCardContainer ({image, details, isImageFirst}: ItemCardContainerProps) {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "0.8 1"],
  });

  // Transform animations
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  
  return (
    <div
      className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between"
    >
      <motion.div
        ref={ref}
        style={{
          opacity: opacity,
          scale: scale, // Subtle scale-in
          y: translateY, // Parallax effect
        }}        
        className="relative w-full h-[352px] aspect-auto rounded-[8px] overflow-hidden lg:w-[540px] lg:h-[500px]"
      >
        {image}
      </motion.div>
      <div className={`${isImageFirst ? "" : "lg:order-first"} flex flex-col gap-6 items-center text-center lg:w-[345px] xl:w-[445px] lg:text-start lg:items-start`}>
        {details}
      </div>
    </div>
  )
}