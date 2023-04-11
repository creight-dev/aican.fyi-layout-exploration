'use client'

import React, { useState } from 'react'
import Hero from '@/app/(tools)/hero'
import { groupByCategory } from '@/lib'

import SidePanel from '@/components/layout/side-panel'
import ResourceCategory from '@/components/resource-category'
import Search from '@/components/search'

export type SearchResourcesByCategoryProps = {
  value: Array<any>
}

const SearchResourcesByCategory = ({ value }: SearchResourcesByCategoryProps) => {
  const [categories, setCategories] = useState(value)
  const [sortBy, setSortBy] = useState('Size')
  const handleSearch = async (search: string) => {
    //   make a call to api/search
    const response = await fetch(`/api/search?q=${search}`)
    const data = await response.json()
    // console.log(groupByCategory(data))
    setCategories(groupByCategory(data))
    // console.log(response)
  }
  return (
    <>
      <Hero
        heading="AI Tools & Apps"
        subheading="Revolutionize Your Workflow with Cutting-Edge AI-Powered Tools and Apps - Discover the Latest AI Innovations to Streamline Your Tasks and Boost Productivity."
      />
      <div className="grid grid-cols-[auto_1fr] gap-x-12 pt-32">
        <SidePanel />
        <div>
          <Search onSearch={handleSearch} />
          <div className="mt-20 space-y-16">
            {categories
              .sort((a, b) => (a.resources.length > b.resources.length ? -1 : 1))
              .map(category => (
                <ResourceCategory key={category.id} name={category.name} resources={category.resources} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResourcesByCategory
