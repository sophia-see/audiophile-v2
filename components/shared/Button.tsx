"use client"

import React, { ElementType } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "black";
  icon?: ElementType;
  iconColor?: string;
  iconSize?: number;
}

export default function Button(props: ButtonProps) {
  const {
    className,
    children,
    variant = "default",
    icon: Icon,
    iconColor = "brown",
    iconSize = 16,
    ...rest
  } = props;
  
  const isDefault = variant === "default";
  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";
  const isBlack = variant === "black";

  return (
    <button
      className={`
        transition duration-300
        flex items-center gap-[13.32px]
        py-[15px] pl-[31.5px] pr-[29.5px]
        font-bold text-[13px] leading-auto tracking-[1px] uppercase
        ${isDefault ? "bg-brown text-white border-none hover:bg-light-brown" : ""}
        ${isBlack ? "bg-black text-white border-none hover:bg-light-black" : ""}
        ${isOutline ? "bg-transparent text-black border border-black hover:bg-black hover:text-white" : ""}
        ${isGhost ? "bg-transparent text-black/50 border-none hover:text-brown" : ""}
        ${className || ""}  
      `}
      {...rest}
    >
      {children}
      {Icon && <Icon className={`stroke-${iconColor}`} size={iconSize} />}
    </button>
  )
}
