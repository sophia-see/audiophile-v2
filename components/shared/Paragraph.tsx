import React from 'react'

interface ParagraphProps {
  text: string;
  className?: string;
}

export default function Paragraph({text, className}: ParagraphProps) {
  return (
    <div
      className={`
        font-medium text-[15px] leading-[25px]  
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
