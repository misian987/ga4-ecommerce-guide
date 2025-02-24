<template>
  <aside class="w-64 bg-white shadow-sm">
    <nav class="h-full overflow-y-auto p-6">
      <ul class="space-y-2">
        <li v-for="section in navigation" :key="section.name" class="space-y-1">
          <NuxtLink
            :to="section.to"
            class="block px-3 py-2 text-sm font-medium rounded-md"
            :class="[
              route.path === section.to
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            ]"
          >
            {{ section.name }}
          </NuxtLink>
          <ul v-if="section.items.length" class="ml-4 space-y-1">
            <li v-for="item in section.items" :key="item.name">
              <NuxtLink
                :to="item.to"
                class="block px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  route.path === item.to
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                ]"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()

const navigation = [
  {
    name: 'Getting Started',
    to: '/',
    items: []
  },
  {
    name: 'Setup and Basics',
    to: '/tutorials/setup',
    items: [
      { name: 'GTM Account Setup', to: '/tutorials/setup/gtm-setup' },
      { name: 'GA4 Configuration', to: '/tutorials/setup/ga4-config' },
      { name: 'Data Layer Basics', to: '/tutorials/setup/data-layer' },
    ]
  },
  {
    name: 'Core E-commerce Events',
    to: '/tutorials/core-events',
    items: [
      { name: 'View Item', to: '/tutorials/core-events/view-item' },
      { name: 'Add to Cart', to: '/tutorials/core-events/add-to-cart' },
      { name: 'Begin Checkout', to: '/tutorials/core-events/begin-checkout' },
      { name: 'Purchase', to: '/tutorials/core-events/purchase' },
    ]
  },
  {
    name: 'Enhanced Features',
    to: '/tutorials/enhanced',
    items: [
      { name: 'Promotions', to: '/tutorials/enhanced/promotions' },
      { name: 'Refunds', to: '/tutorials/enhanced/refunds' },
      { name: 'Custom Metrics', to: '/tutorials/enhanced/custom-metrics' },
    ]
  },
  {
    name: 'Best Practices',
    to: '/tutorials/best-practices',
    items: [
      { name: 'Testing', to: '/tutorials/best-practices/testing' },
      { name: 'Debugging', to: '/tutorials/best-practices/debugging' },
      { name: 'Documentation', to: '/tutorials/best-practices/documentation' },
    ]
  }
]
</script> 