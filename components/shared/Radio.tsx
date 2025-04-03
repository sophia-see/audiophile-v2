"use client";

import { motion } from "framer-motion";
import React, { createContext, useContext } from "react";

interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const RadioContext = createContext<{
  value: string;
  onChange: (value: string) => void;
} | null>(null);

export function RadioGroup({ value, onChange, children, className }: RadioGroupProps) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      <div role="radiogroup" className={`flex flex-col gap-4 ${className || ""}`}>
        {children}
      </div>
    </RadioContext.Provider>
  );
}

interface RadioItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function RadioItem({ value, children, className }: RadioItemProps) {
  const context = useContext(RadioContext);
  if (!context) throw new Error("RadioItem must be used within a RadioGroup");

  const isSelected = context.value === value;

  return (
    <button
      role="radio"
      aria-checked={isSelected}
      onClick={() => context.onChange(value)}
      className={`
        pt-[18px] pb-[19px] px-4
        font-bold text-[14px] leading-auto tracking-[-0.25px]
        flex items-center gap-4 rounded-[8px] border cursor-pointer
        ${isSelected ? " border-brown" : "border-input hover:border-brown"}
        transition duration-300 ease-in-out ${className || ""}
      `}
    >
      <motion.div
        className={`w-5 h-5 flex justify-center items-center rounded-full border border-input`}
        animate={{ scale: isSelected ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {isSelected && <motion.div className="w-[10px] h-[10px] rounded-full bg-brown" />}
      </motion.div>
      {children}
    </button>
  );
}
