interface NumberPickerProps {
  value: number | undefined | null;
  setValue: (value: number | undefined | null) => void;
  min?: number;
  max?: number;
  className?: string;
  size?: "default" | "small";
}

interface NumberButtonProps {
  label: string;
  constraint: boolean;
  onClick: () => void;
  size: "default" | "small";
}

function NumberButton({label, constraint, onClick, size}: NumberButtonProps) {
  const isSmall = size === "small";
  return (
    <div 
      className={`${isSmall ? "py-[7px] px-[11.5px]" : "py-[15px] px-[15.5px]"} opacity-25 ${constraint ? "cursor-not-allowed" : "cursor-pointer hover:opacity-100 hover:text-brown"}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default function NumberPicker(props: NumberPickerProps) {
  const {
    value,
    setValue,
    min,
    max,
    className,
    size = "default"
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
      <NumberButton
        label="-"
        constraint={isMin}
        onClick={() => !isMin && value && setValue(value - 1)}
        size={size}
      />
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
      <NumberButton
        label="+"
        constraint={isMax}
        onClick={() => !isMax && value && setValue(value + 1)}
        size={size}
      />
    </div>
  )
}
