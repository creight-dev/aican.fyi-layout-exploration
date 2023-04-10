import HeaderWithSearch from '@/app/(tools)/header-with-search'
import { categories as rawData } from '@/prisma/categories'

import AppShell from '@/components/app-shell'
import SidePanel from '@/components/layout/side-panel'
import ResourceCategory from '@/components/resource-category'

const CATEGORIES = [
  'Search Engine',
  'Real Estate',
  'Life Assistant',
  'Music',
  'Healthcare',
  'Text to Animated Video',
  'Research',
  'Fun Tools',
  'Avatars',
  'Text to Voice Over and Video',
  'Transcriber',
  'Email Assistant',
  'Photo',
  'Education Assistant',
  'Video Editing',
  'Code Assistant',
  'Image Editing',
  'Story Teller',
  'Spreadsheets',
  'Gift Ideas',
  'Experiments',
  'Voiceover + avatar',
  'Low-code/no-code',
  'Design Assistant',
  'Prompts',
  'Paraphraser',
  'Video Generator',
  'Cloned voiceover',
  'Copywriting',
  'SQL',
  'Resources',
  'Startup',
  'Logo Generator',
  'General Writing',
  'Gaming',
  'Text',
  'Human Resources',
  'Audio Editing',
  'Memory',
  'Customer Support',
  'Animated Video Generator',
  'Legal Assistant',
  'Sales',
  'Developer Tools',
  'Art',
  'Fashion',
  '3D',
  'Text To Speech',
  'Summarizer',
  'Video Creation and Editing',
  'Social Media Assistant',
  'Image Generator',
  'SEO',
  'Video Planner',
  'Productivity',
  'Social Media Assistant',
  'Personalized Videos',
]
const DEFAULT_CATEGORIES_TO_SHOW = CATEGORIES.length
const Home = () => {
  let categories: Array<{ name: string; resources: Array<typeof rawData> }> = []
  CATEGORIES.slice(0, DEFAULT_CATEGORIES_TO_SHOW).forEach(category => {
    categories.push({
      name: category,
      resources: rawData.filter(resource => resource.category === category),
    })
  })

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
