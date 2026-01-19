import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive disabled:opacity-50 disabled:cursor-not-allowed",
          {
            'bg-terracotta hover:bg-terracotta-600 text-white hover:shadow-medium hover:-translate-y-0.5': variant === 'primary',
            'border-2 border-olive text-olive hover:bg-olive hover:text-white': variant === 'secondary',
            'hover:bg-cream-200': variant === 'ghost',
            'border border-charcoal-300 hover:border-charcoal-500': variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
