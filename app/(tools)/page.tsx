import HeaderWithSearch from '@/app/(tools)/header-with-search'
import { tools } from '@/data/tools'

import AppShell from '@/components/app-shell'
import ToolCard from '@/components/tool-card'

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Home = () => (
  <AppShell>
    <HeaderWithSearch
      heading="AI Tools"
      subheading="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet."
    />
    <section className="mt-10 space-y-4">
      <h2 className="text-xl font-medium">Art</h2>
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        {tools.slice(0, 6).map(tool => (
          <ToolCard {...tool} />
        ))}
      </div>
    </section>
    <section className="mt-10 space-y-4">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium">Text to Speech</h2>
        <span className="cursor-pointer text-sm text-primary-10">View more</span>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        {tools.slice(6, 9).map(tool => (
          <ToolCard {...tool} />
        ))}
      </div>
    </section>
  </AppShell>
)
export default Home
