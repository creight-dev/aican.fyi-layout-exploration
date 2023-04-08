import React from 'react'

import Header from '@/components/layout/header'

export type AppShellProps = {
  children: React.ReactNode
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="grow py-10">
        <main>
          <div className="mx-auto max-w-7xl p-4 md:p-10">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default AppShell
