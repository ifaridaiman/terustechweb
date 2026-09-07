import type { ReactNode } from 'react'

interface TextRollButtonProps {
  label: string
  icon: ReactNode
  className: string
  textClassName: string
  circleClassName: string
  onClick?: () => void
}

export default function TextRollButton({
  label,
  icon,
  className,
  textClassName,
  circleClassName,
  onClick,
}: TextRollButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${className}`}
    >
      <span className={`overflow-hidden h-[20px] ${textClassName}`}>
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px]">{label}</span>
          <span className="h-[20px] leading-[20px]">{label}</span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleClassName}`}
      >
        {icon}
      </span>
    </button>
  )
}
