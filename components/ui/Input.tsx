import { cn } from "@/lib/utils"
import { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-lg transition-all duration-200",
            "focus:outline-none focus:ring-2",
            className
          )}
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            border: error ? '1px solid var(--color-error)' : '1px solid var(--color-border)'
          }}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm" style={{ color: 'var(--color-error)' }}>{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
