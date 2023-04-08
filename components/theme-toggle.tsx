'use client'

import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export type ThemeToggleProps = {}

const ThemeToggle = ({}: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center">
      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
        type="button"
        className="rounded-full bg-white p-1 text-neutral-10 hover:text-neutral-12 focus:outline-none
                dark:bg-neutralDark-5 dark:text-neutralDark-10 dark:ring-1 dark:ring-neutralDark-7 dark:hover:text-neutralDark-12 dark:hover:ring-neutralDark-8"
      >
        <span className="sr-only">View notifications</span>
        <SunIcon className="hidden h-5 w-5 dark:block" aria-hidden="true" />
        <MoonIcon className="h-5 w-5 dark:hidden" aria-hidden="true" />
      </button>
      {/* FIXME: Profile dropdown */}
    </div>
  )
}

export default ThemeToggle
