import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ui/theme-toggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-semibold text-gray-800 dark:text-white">
              UI Dream
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Products
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="ghost" className="mr-">Sign In</Button>
              <Button>Sign Up</Button>
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            <ModeToggle />

          </div>
        </div>
      </div>
    </nav>
  )
}






