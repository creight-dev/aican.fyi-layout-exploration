import { db } from '@/lib/db'
import AppShell from '@/components/app-shell'
import SidePanel from '@/components/layout/side-panel'
import ResourceCategory from '@/components/resource-category'
import HeaderWithSearch from './header-with-search'

// TODO: get all categories from prisma
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
      <HeaderWithSearch
        heading="AI Tools & Apps"
        subheading="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet."
      />
      <div className="grid grid-cols-[auto_1fr] gap-x-12 pt-16">
        <SidePanel />
        <div className="space-y-16">
          {categories.map(category => (
            <ResourceCategory category={category.name} resources={category.resources} />
          ))}
        </div>
      </div>
    </AppShell>
  )
}
export default Home
