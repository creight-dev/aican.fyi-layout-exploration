import React from 'react'
import { categories } from '@/data/categories'
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
const ResourceCategory = ({ category, resources }: ResourceCategoryProps) => {
  const showMore = resources.length > DEFAULT_MAX_ITEMS
  const count = resources.length
  if (showMore) resources = resources.slice(0, DEFAULT_MAX_ITEMS)
  return (
    <section className="space-y-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-3">
          <h2 className="font-heading text-xl tracking-wide">{category}</h2>
          {showMore && <Count count={count} />}
        </div>
        <span className={clsx('cursor-pointer text-sm text-primary-10', { hidden: !showMore })}>View more</span>
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
