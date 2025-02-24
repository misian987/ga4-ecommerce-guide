<template>
  <div class="max-w-5xl mx-auto">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Master GA4 E-commerce Tracking
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Learn how to implement GA4 E-commerce tracking through Google Tag Manager at an expert level.
        Follow our interactive tutorials and hands-on exercises to master e-commerce analytics.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink
          to="/tutorials/setup"
          class="btn-primary"
        >
          Get started
          <ArrowRightIcon class="ml-2 -mr-1 h-5 w-5" />
        </NuxtLink>
        <NuxtLink
          to="/demo-store"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          View demo store <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>

    <div class="mt-32">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div v-for="feature in features" :key="feature.name" class="relative pl-16">
          <div class="text-lg font-semibold leading-7 text-gray-900">
            {{ feature.name }}
          </div>
          <div class="mt-2 text-base leading-7 text-gray-600">
            {{ feature.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-32 rounded-2xl bg-gray-50 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Ready to become a GA4 expert?
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Start with our comprehensive setup guide and work your way through
          each tutorial at your own pace.
        </p>
      </div>
      <div class="mt-10 lg:mt-0 lg:ml-8">
        <NuxtLink
          to="/tutorials/setup"
          class="btn-primary"
        >
          Begin Learning
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

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
</script> 