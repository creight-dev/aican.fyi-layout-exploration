import React from 'react'
import clsx from 'clsx'
import { MoonIcon, SunIcon } from 'lucide-react'

import ThemeToggle from '@/components/theme-toggle'

export type HeaderProps = {}

const navigation = [
  { name: 'Tools', href: '#', current: true },
  { name: 'Guides', href: '#', current: false },
  // { name: 'Community', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
]
const ProfileDropdown = () => (
  <div className="relative ml-3">
    <div>
      <button
        type="button"
        className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex={-1}
    >
      {/* Active: "bg-gray-100", Not Active: "" */}
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">
        Your Profile
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">
        Settings
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">
        Sign out
      </a>
    </div>
  </div>
)

const Links = () => (
  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
    {navigation.map(item => (
      <a
        key={item.name}
        href={item.href}
        className={clsx(
          item.current
            ? 'border-primary-9 text-neutral-12 dark:border-primaryDark-9 dark:text-neutralDark-12'
            : 'border-transparent text-neutral-10 hover:border-neutral-8 hover:text-neutral-11 dark:text-neutralDark-10 dark:hover:border-neutralDark-8 dark:hover:text-neutralDark-11',
          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
)

const MobileMenu = () => (
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 pb-3 pt-2">
      {/* Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" */}
      <a
        href="#"
        className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
        aria-current="page"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
      >
        Team
      </a>
      <a
        href="#"
        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
      >
        Projects
      </a>
      <a
        href="#"
        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
      >
        Calendar
      </a>
    </div>
    <div className="border-t border-gray-200 pb-3 pt-4">
      <div className="flex items-center px-4">
        {/* User Profile Image */}
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-800">Tom Cook</div>
          <div className="text-sm font-medium text-gray-500">tom@example.com</div>
        </div>
        <button
          type="button"
          className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <a
          href="#"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          Sign out
        </a>
      </div>
    </div>
  </div>
)

const Header = ({}: HeaderProps) => {
  return (
    <nav className="border-b border-neutral-6 bg-white dark:border-neutralDark-6 dark:bg-neutralDark-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <svg className="h-8 w-auto" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6467 39.5183L7.78149 32.8236L13.4539 23.0256L17.0585 29.2694L38.3371 29.258L32.2992 39.6108L11.6467 39.5183Z"
                  fill="#99D52A"
                />
                <path
                  d="M42.1367 22.6102L38.2715 29.3048L26.95 29.2915L30.5549 23.0479L19.9058 4.62573L31.8905 4.67832L42.1367 22.6102Z"
                  fill="#D6409F"
                />
                <path
                  d="M12.2423 4.59009H19.9727L25.6218 14.4016L18.4121 14.4013L7.78282 32.8349L1.83594 22.4295L12.2423 4.59009Z"
                  fill="#F76808"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9153 3.03999L20.8922 3H11.3291L0 22.4214L7.77686 36.0287L7.7864 36.0122L10.7264 41.1044L33.2103 41.2049L41.1062 27.6662H41.0537L43.9705 22.6142L32.8156 3.0922L20.9153 3.03999ZM28.3129 15.9917H28.3725L22.751 6.22838L30.9654 6.2644L40.3029 22.606L37.3803 27.6684L29.721 27.6724L32.3915 23.0473L28.3129 15.9917ZM18.9678 6.18024L22.8009 12.8113L17.4937 12.8112L8.40775 28.5681L7.78797 29.6388L3.67236 22.4376L13.1558 6.18024H18.9678ZM15.2825 23.0123L19.3309 15.9915L24.6395 15.9917L28.7186 23.0482L26.0475 27.6744L17.9765 27.6788L15.2825 23.0123ZM9.62137 32.8299L11.1616 30.1589L13.452 26.2026L16.1407 30.8601L24.2106 30.8557L24.1975 30.8783L35.5435 30.8917L31.3882 38.0165L12.5672 37.9323L9.62137 32.8299Z"
                  fill="#0B0911"
                />
              </svg>
            </div>
            {/* FIXME: Links */}
            <Links />
          </div>
          {/*<div className="hidden sm:ml-6 sm:flex sm:items-center">*/}
          {/*  <button*/}
          {/*    type="button"*/}
          {/*    className="rounded-full bg-white p-1 text-neutral-10 hover:text-neutral-12 focus:outline-none focus:ring-2 focus:ring-indigo-500*/}
          {/*      focus:ring-offset-2 dark:bg-neutralDark-5 dark:text-neutralDark-10 dark:ring-1 dark:ring-neutralDark-7 dark:hover:text-neutralDark-12 dark:hover:ring-neutralDark-8"*/}
          {/*  >*/}
          {/*    <span className="sr-only">View notifications</span>*/}
          {/*    <SunIcon className="hidden h-5 w-5 dark:block" aria-hidden="true" />*/}
          {/*    <MoonIcon className="h-5 w-5 dark:hidden" aria-hidden="true" />*/}
          {/*  </button>*/}
          {/*  /!* FIXME: Profile dropdown *!/*/}
          {/*</div>*/}
          <ThemeToggle />
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
    </nav>
  )
}

export default Header
