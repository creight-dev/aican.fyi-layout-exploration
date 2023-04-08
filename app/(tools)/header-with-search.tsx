import { Search, SearchIcon } from 'lucide-react'

export type HeaderWithSearchProps = {
  heading: string
  subheading?: string
  onSearch?: (search: string) => void
}
const HeaderWithSearch = ({ heading, subheading, onSearch }: HeaderWithSearchProps) => (
  <div className="">
    <div className="lg:flex lg:items-end lg:justify-between">
      <div className="max-w-xl">
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight">{heading}</h2>
        {subheading && <p className="mt-5 text-xl text-neutral-11 dark:text-neutralDark-11">{subheading}</p>}
      </div>
      <div className="mt-10 w-full max-w-xs">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-neutral-10 dark:text-neutralDark-10" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="query"
            id="query"
            className="block w-full rounded-md border-0 bg-neutral-1 py-1.5 pl-10 ring-1  ring-inset ring-neutral-6 placeholder:text-neutral-10 focus:ring-2
              focus:ring-inset focus:ring-primary-7 dark:bg-neutralDark-3 dark:ring-neutralDark-6 dark:placeholder:text-neutralDark-10 sm:text-sm sm:leading-6"
            placeholder="search for tools"
          />
        </div>
      </div>
    </div>
  </div>
)
export default HeaderWithSearch
