"use client"

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // className?: string;
  error?: string | null;
  label?: string;
}

export default function TextField(props: TextFieldProps) {
  const {
    // className,
    error,
    label,
    ...rest
  } = props;

  return (
    <div className='w-fit flex flex-col gap-[9px]'>
      <div className='w-full flex items-center justify-between'>
        <span 
          className={`
            font-bold text-[12px] leading-auto tracking-[-0.21px]
            ${error 
              ? "text-error"
              : "text-black"
            }
          `}
        >
          {label && label}
        </span>
        <span className='font-medium text-[12px] leading-auto tracking-[-0.21px] text-error'>{error && error}</span>
      </div>
      <input
        className={`
          font-bold text-[14px] leading-auto tracking-[-0.25px] text-black
          placeholder:text-black/40
          border  rounded-[8px]
          px-[24px] pt-[18px] pb-[19px]
          focus:border-brown focus:outline-none caret-brown 
          ${error ? "border-error" : "border-input"}
        `}
        {...rest}
      />
    </div>
  )
}
