import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef, CSSProperties } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, style, ...props }, ref) => {
    const getVariantStyles = (): CSSProperties => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-text-on-accent)',
            border: 'none'
          }
        case 'secondary':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
            border: '2px solid var(--color-primary)'
          }
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-text-primary)',
            border: 'none'
          }
        case 'outline':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-border)'
          }
        default:
          return {}
      }
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          "hover:shadow-md hover:-translate-y-0.5",
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        style={{ ...getVariantStyles(), ...style }}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)'
            e.currentTarget.style.color = 'var(--color-text-on-primary)'
          } else if (variant === 'ghost') {
            e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)'
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)'
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = 'var(--color-primary)'
          } else if (variant === 'ghost') {
            e.currentTarget.style.backgroundColor = 'transparent'
          }
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
