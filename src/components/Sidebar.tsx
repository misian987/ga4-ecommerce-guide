import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const navigation = [
  {
    name: 'Getting Started',
    href: '/',
    items: []
  },
  {
    name: 'Setup and Basics',
    href: '/tutorials/setup',
    items: [
      { name: 'GTM Account Setup', href: '/tutorials/setup/gtm-setup' },
      { name: 'GA4 Configuration', href: '/tutorials/setup/ga4-config' },
      { name: 'Data Layer Basics', href: '/tutorials/setup/data-layer' },
    ]
  },
  {
    name: 'Core E-commerce Events',
    href: '/tutorials/core-events',
    items: [
      { name: 'View Item', href: '/tutorials/core-events/view-item' },
      { name: 'Add to Cart', href: '/tutorials/core-events/add-to-cart' },
      { name: 'Begin Checkout', href: '/tutorials/core-events/begin-checkout' },
      { name: 'Purchase', href: '/tutorials/core-events/purchase' },
    ]
  },
  {
    name: 'Enhanced Features',
    href: '/tutorials/enhanced',
    items: [
      { name: 'Promotions', href: '/tutorials/enhanced/promotions' },
      { name: 'Refunds', href: '/tutorials/enhanced/refunds' },
      { name: 'Custom Metrics', href: '/tutorials/enhanced/custom-metrics' },
    ]
  },
  {
    name: 'Best Practices',
    href: '/tutorials/best-practices',
    items: [
      { name: 'Testing', href: '/tutorials/best-practices/testing' },
      { name: 'Debugging', href: '/tutorials/best-practices/debugging' },
      { name: 'Documentation', href: '/tutorials/best-practices/documentation' },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-sm">
      <nav className="h-full overflow-y-auto p-6">
        <ul className="space-y-2">
          {navigation.map((section) => (
            <li key={section.name} className="space-y-1">
              <Link
                href={section.href}
                className={classNames(
                  'block px-3 py-2 text-sm font-medium rounded-md',
                  pathname === section.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {section.name}
              </Link>
              {section.items.length > 0 && (
                <ul className="ml-4 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          'block px-3 py-2 text-sm font-medium rounded-md',
                          pathname === item.href
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
} 