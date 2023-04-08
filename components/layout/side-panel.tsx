// import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

import clsx from 'clsx'
import { BarChart2Icon, CalendarIcon, FolderArchiveIcon, HomeIcon, InboxIcon, UserCheckIcon } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UserCheckIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderArchiveIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: BarChart2Icon, current: false },
]
const secondaryNavigation = [
  { name: 'Website redesign', href: '#' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
  { name: 'Profit sharing program', href: '#' },
]

const SidePanel = () => (
  <nav aria-label="Sidebar">
    <div className="space-y-1">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={clsx(
            item.current
              ? 'bg-neutral-5 dark:bg-neutralDark-5'
              : 'text-neutral-10 hover:bg-neutral-4 hover:text-neutral-12 dark:text-neutralDark-10 dark:hover:bg-neutralDark-4 dark:hover:text-neutralDark-12',
            'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={clsx(
              item.current
                ? 'text-neutral-11 dark:text-neutralDark-11'
                : 'text-neutral-10 group-hover:text-neutral-11 dark:text-neutralDark-10 dark:group-hover:text-neutralDark-11',
              '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </div>
    <div className="mt-8">
      <h3 className="px-3 text-sm font-medium text-neutral-11 dark:text-neutralDark-11" id="projects-headline">
        Projects
      </h3>
      <div className="mt-1 space-y-1" aria-labelledby="projects-headline">
        {secondaryNavigation.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="group flex items-center rounded-md px-3
              py-2 text-sm font-medium text-neutral-10  hover:bg-neutral-5 hover:text-neutral-11
                dark:text-neutralDark-10 dark:hover:bg-neutralDark-5 dark:hover:text-neutralDark-11"
          >
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  </nav>
)
export default SidePanel
