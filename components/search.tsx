'use client'

import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon, FilterIcon, SearchIcon } from 'lucide-react'

const filters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]
export type SearchProps = {
  onSearch: (value: string) => void
}

const Search = ({ onSearch }: SearchProps) => {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full justify-end">
        {/* TODO: Filters */}
        <div className="w-full max-w-xs">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-neutral-10 dark:text-neutralDark-10" aria-hidden="true" />
            </div>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              type="text"
              name="query"
              id="query"
              className="block w-full rounded-md border border-neutral-6 bg-neutral-1 bg-neutral-3 py-2
              pl-10 placeholder:text-neutral-10 focus:outline-none focus:ring-2 focus:ring-primary-8 focus:ring-offset-2 dark:border-neutralDark-6
              dark:bg-neutralDark-3 dark:placeholder:text-neutralDark-10 dark:focus:ring-offset-primaryDark-7 sm:text-sm sm:leading-6"
              placeholder="search for tools"
            />
          </div>
        </div>
      </div>
    </form>
  )
}
export default Search
