<template>
  <div class="prose max-w-none">
    <h1>Setup and Configuration</h1>
    
    <p>
      Welcome to the first tutorial! Here you'll learn how to set up Google Tag Manager
      and configure GA4 for e-commerce tracking. We'll cover everything from creating
      your accounts to implementing the basic tracking code.
    </p>

    <h2>What You'll Learn</h2>
    <ul>
      <li>Creating a GTM account and container</li>
      <li>Setting up a GA4 property</li>
      <li>Implementing basic tracking code</li>
      <li>Understanding the data layer</li>
      <li>Testing your implementation</li>
    </ul>

    <h2>Prerequisites</h2>
    <ul>
      <li>A Google account</li>
      <li>Access to your website's HTML</li>
      <li>Basic understanding of HTML/JavaScript</li>
    </ul>

    <div class="not-prose">
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <NuxtLink
          to="/tutorials/setup/gtm-setup"
          class="card hover:bg-gray-50"
        >
          <h3 class="text-lg font-semibold text-gray-900">GTM Account Setup →</h3>
          <p class="mt-2 text-gray-600">
            Learn how to create and configure your Google Tag Manager account and container.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/tutorials/setup/ga4-config"
          class="card hover:bg-gray-50"
        >
          <h3 class="text-lg font-semibold text-gray-900">GA4 Configuration →</h3>
          <p class="mt-2 text-gray-600">
            Set up your GA4 property and configure it for e-commerce tracking.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/tutorials/setup/data-layer"
          class="card hover:bg-gray-50"
        >
          <h3 class="text-lg font-semibold text-gray-900">Data Layer Basics →</h3>
          <p class="mt-2 text-gray-600">
            Understand how the data layer works and implement basic tracking.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/tutorials/setup/testing"
          class="card hover:bg-gray-50"
        >
          <h3 class="text-lg font-semibold text-gray-900">Testing & Validation →</h3>
          <p class="mt-2 text-gray-600">
            Learn how to test and validate your GTM and GA4 implementation.
          </p>
        </NuxtLink>
      </div>
    </div>

    <h2 class="mt-12">Next Steps</h2>
    <p>
      After completing this section, you'll be ready to implement specific e-commerce
      events in the next tutorial. Make sure you have a solid understanding of the
      concepts covered here before moving forward.
    </p>

    <div class="mt-8">
      <NuxtLink
        to="/tutorials/setup/gtm-setup"
        class="btn-primary"
      >
        Start with GTM Setup
      </NuxtLink>
    </div>
  </div>
</template> 