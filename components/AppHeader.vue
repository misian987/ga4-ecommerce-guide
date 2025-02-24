<template>
  <header class="bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center">
            <AcademicCapIcon class="h-8 w-8 text-blue-600" />
            <span class="ml-2 text-xl font-semibold">GA4 E-commerce Course</span>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink
            to="/demo-store"
            class="btn-primary"
          >
            Demo Store
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { AcademicCapIcon } from '@heroicons/vue/24/outline'
</script> 