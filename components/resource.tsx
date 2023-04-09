import React from 'react'

export type ResourceProps = {
  name: string
  description: string
}

const Resource = ({ name, description }: ResourceProps) => {
  return (
    <div className="rounded-md bg-white p-5 shadow-1 ring-1 ring-transparent dark:bg-neutralDark-2 dark:shadow-none dark:ring-neutralDark-6">
      <div className="flex h-full flex-col gap-y-4">
        <div className="h-8 w-8 rounded-md border border-dashed border-neutral-7 bg-neutral-1 dark:border-neutralDark-7 dark:bg-neutralDark-3 lg:h-14 lg:w-14"></div>
        <div className="space-y-1.5">
          <h2 className="text-base font-bold">{name}</h2>{' '}
          <p className="line-clamp-3 text-sm text-neutral-11 dark:text-neutralDark-11">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Resource
