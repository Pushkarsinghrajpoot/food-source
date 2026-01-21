'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: theme === 'dark' ? 'var(--color-primary)' : 'var(--color-border)',
        boxShadow: 'var(--shadow-sm)'
      }}
      aria-label="Toggle theme"
    >
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center"
        style={{
          left: theme === 'dark' ? 'calc(100% - 26px)' : '2px',
          backgroundColor: 'var(--color-bg-primary)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        {theme === 'dark' ? (
          <Moon size={14} style={{ color: 'var(--color-primary)' }} />
        ) : (
          <Sun size={14} style={{ color: 'var(--color-accent)' }} />
        )}
      </span>
    </button>
  )
}
