interface TitleProps {
  text: string | React.ReactNode;
  variant?: "default" | "extra" | "subtitle";
  className?: string;
}

export default function Title({text, variant = "default", className}: TitleProps) {
  const isExtra = variant == "extra";
  const isSubtitle = variant == "subtitle";

  return (
    <div
      className={`
        uppercase
        font-bold 
        ${isExtra 
          ? "text-[36px] leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]" 
          : isSubtitle
            ? "text-[24px] leading-[36px] tracking-[0.86px]"
            : "text-[28px] tracking-[2px]"
        }
        ${className || ""}  
      `}
    >
      {text}
    </div>
  )
}
