import React from 'react'
import type { Resource as IResource } from '@prisma/client'
import clsx from 'clsx'

import Resource, { ResourceProps } from '@/components/resource'

export type ResourceCategoryProps = {
  name: string
  resources: Array<IResource>
}

const DEFAULT_MAX_ITEMS = 9

const Count = ({ count }: { count: number }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-primary-7 bg-primary-3 px-3 py-0.5 text-xs font-medium text-primary-10 dark:border-primaryDark-7 dark:bg-primaryDark-3 dark:text-primaryDark-10">
      {count}
    </span>
  )
}

const ShowMoreButton = () => (
  <button
    type="button"
    className="rounded-full bg-transparent px-2.5 py-1 text-xs font-semibold text-neutral-11 ring-1 ring-neutral-7
      hover:ring-neutral-8 dark:text-neutralDark-11 dark:ring-neutralDark-7 dark:hover:text-neutralDark-12
      dark:hover:ring-neutralDark-8"
  >
    Show all
  </button>
)
const ResourceCategory = ({ name, resources }: ResourceCategoryProps) => {
  const count = resources.length
  const showMore = count > DEFAULT_MAX_ITEMS
  if (showMore) resources = resources.slice(0, DEFAULT_MAX_ITEMS)
  return (
    <section className="space-y-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className="group flex cursor-pointer flex-col pb-0.5">
            <h2 className="font-heading text-xl tracking-wide">{name}</h2>
            <span className="h-px w-full group-hover:bg-black dark:group-hover:bg-white"></span>
          </div>
          {showMore && <Count count={count} />}
        </div>
        {showMore && <ShowMoreButton />}
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        {resources.map(resource => (
          <Resource key={resource.id} name={resource.name} description={resource.description} />
        ))}
      </div>
    </section>
  )
}

export default ResourceCategory
