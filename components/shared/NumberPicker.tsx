import React from 'react'

interface NumberPickerProps {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export default function NumberPicker(props: NumberPickerProps) {
  const {
    value,
    setValue,
    min,
    max,
    className,
  } = props;

  const isMax = max == value;
  const isMin = min == value;

  return (
    <div 
      className={`
        w-fit 
        flex items-center gap-[5px] justify-evenly
        bg-gray py-[15px] 
        font-bold text-[13px] tracking-[1px]
        select-none
        ${className || ""}
      `}
    >
      <div 
        className='cursor-pointer px-[15.5px] opacity-25 hover:opacity-100 hover:text-brown'
        onClick={() => !isMin && setValue(value - 1)}
      >
        -
      </div>
      <div>
        {value}
      </div>
      <div 
        className='cursor-pointer px-[15.5px] opacity-25 hover:opacity-100 hover:text-brown'
        onClick={() => !isMax && setValue(value + 1)}
      >
        +
      </div>
    </div>
  )
}
