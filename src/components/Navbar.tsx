import Link from 'next/link'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-semibold">GA4 E-commerce Course</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/demo-store"
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Demo Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 