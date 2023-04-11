import './globals.css'
import clsx from 'clsx'

import { ThemeProvider } from '@/components/theme-provider'
import { bluuNextFont, geliatFont } from '@/styles/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(geliatFont.variable, bluuNextFont.variable, 'h-full  font-sans antialiased ')}
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col bg-neutral-1 text-neutral-12 dark:bg-neutralDark-1 dark:text-neutralDark-12">
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
