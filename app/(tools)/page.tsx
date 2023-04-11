import React from 'react'

import { db } from '@/lib/db'
import AppShell from '@/components/app-shell'
import SearchResourcesByCategory from '@/components/search-resources'

export const metadata = {
  title: 'AI Can - FYI',
  description: 'Learn what AI can do for you',
}
const getCategories = async () => {
  return await db.category.findMany({
    include: {
      resources: true,
    },
  })
}
const Home = async () => {
  const categories = await getCategories()
  return (
    <AppShell>
      <SearchResourcesByCategory value={categories} />
    </AppShell>
  )
}
export default Home
