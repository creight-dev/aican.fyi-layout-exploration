import React from 'react'
import clsx from 'clsx'

import Resource, { ResourceProps } from '@/components/resource'

export type ResourceCategoryProps = {
  category: string
  resources: Array<ResourceProps>
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
    className="rounded-full bg-transparent px-2.5 py-1 text-xs font-semibold text-primary-8 ring-1 ring-primary-7
      hover:ring-primary-8 dark:text-primaryDark-8 dark:ring-primaryDark-7 dark:hover:text-primaryDark-9
      dark:hover:ring-primaryDark-8"
  >
    Show all
  </button>
)
const ResourceCategory = ({ category, resources }: ResourceCategoryProps) => {
  const count = resources.length
  const showMore = count > DEFAULT_MAX_ITEMS
  if (showMore) resources = resources.slice(0, DEFAULT_MAX_ITEMS)
  return (
    <section className="space-y-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className="group flex cursor-pointer flex-col pb-0.5">
            <h2 className="font-heading text-xl tracking-wide">{category}</h2>
            <span className="h-px w-full group-hover:bg-black dark:group-hover:bg-white"></span>
          </div>
          {showMore && <Count count={count} />}
        </div>
        {showMore && <ShowMoreButton />}
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        {resources.map(resource => (
          <Resource {...resource} />
        ))}
      </div>
    </section>
  )
}

export default ResourceCategory
