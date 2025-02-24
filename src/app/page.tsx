import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Interactive Learning',
    description: 'Learn by doing with hands-on exercises and real-world examples'
  },
  {
    name: 'Comprehensive Coverage',
    description: 'Master all essential GA4 e-commerce events and advanced features'
  },
  {
    name: 'Best Practices',
    description: 'Learn industry-standard implementation patterns and debugging techniques'
  },
  {
    name: 'Demo Store',
    description: 'Practice with a fully functional e-commerce store implementation'
  }
]

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Master GA4 E-commerce Tracking
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Learn how to implement GA4 E-commerce tracking through Google Tag Manager at an expert level.
          Follow our interactive tutorials and hands-on exercises to master e-commerce analytics.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/tutorials/setup"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get started
            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 inline-block" />
          </Link>
          <Link
            href="/demo-store"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            View demo store <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-lg font-semibold leading-7 text-gray-900">
                {feature.name}
              </div>
              <div className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 rounded-2xl bg-gray-50 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to become a GA4 expert?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with our comprehensive setup guide and work your way through
            each tutorial at your own pace.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-8">
          <Link
            href="/tutorials/setup"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700"
          >
            Begin Learning
          </Link>
        </div>
      </div>
    </div>
  )
} 