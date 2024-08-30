import type { PillProps } from "@/interfaces"

export function Pill({ children, className = '', icon }: PillProps) {
    const IconComponent = icon
    return (
      <div
        className={`inline-flex items-center gap-1 py-1.5 px-4 font-fraunces text-sm font-semibold bento-outline rounded-full ${className}`}
      >
        <IconComponent className="flex-none w-5 h-5" />
        <span>{children}</span>
      </div>
    );
  }