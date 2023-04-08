import React from 'react'

export type ToolCardProps = {
  name: string
  description: string
}

const ToolCard = ({ name, description }: ToolCardProps) => {
  return (
    <div className="rounded-md bg-white p-5 ring-1 ring-transparent dark:bg-neutralDark-2 dark:ring-neutralDark-6">
      <div className="flex h-full flex-col gap-y-4">
        <div className="h-8 w-8 rounded-md bg-neutral-1 dark:bg-neutralDark-5 lg:h-14 lg:w-14"></div>
        <div className="space-y-1.5">
          <h2 className="text-lg font-bold">{name}</h2>{' '}
          <p className="line-clamp-3 text-base text-neutral-11 dark:text-neutralDark-11">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ToolCard
