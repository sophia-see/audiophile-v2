import React from 'react'

interface NumberPickerProps {
  value: number | undefined | null;
  setValue: (value: number | undefined | null) => void;
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
        flex gap-[5px] justify-evenly
        bg-gray 
        font-bold text-[13px] tracking-[1px]
        select-none
        ${className || ""}
      `}
    >
      <div 
        className={`py-[15px] px-[15.5px] opacity-25 ${isMin ? "cursor-not-allowed" : "cursor-pointer hover:opacity-100 hover:text-brown"}`}
        onClick={() => !isMin && value && setValue(value - 1)}
      >
        -
      </div>
      <div>
        <input 
          type="number" 
          value={value !== undefined && value !== null ? String(value) : ""}
          onChange={(e) => {
            const newValue = parseInt(e.target.value);

            if (!isNaN(newValue) && newValue >= 0) {
              setValue(newValue);
            } else {
              setValue(undefined);
            }
          }}
          className="h-full w-8 text-center bg-gray outline-none appearance-none no-spinners"
          />
      </div>
      <div 
        className={`py-[15px] px-[15.5px] opacity-25 ${isMax ? "cursor-not-allowed" : "cursor-pointer hover:opacity-100 hover:text-brown"}`}
        onClick={() => !isMax && value && setValue(value + 1)}
      >
        +
      </div>
    </div>
  )
}
