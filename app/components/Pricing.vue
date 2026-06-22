<script setup lang="ts">
import { ref } from 'vue'

const isAnnual = ref(true)

const plans = [
  {
    name: 'Starter',
    badge: 'Free',
    target: 'Solo Developer',
    description: 'Perfect for individuals getting started.',
    monthlyPrice: '$0',
    annualPrice: '$0',
    billing: 'per month',
    features: [
      'Up to 2 Workspaces',
      '1 Member (Personal use)',
      'Unlimited Tasks & Quicklinks',
      'MCP Access (Local/Basic use)',
      'Community Support'
    ],
    missingFeatures: [
      'Public Views',
      'API Keys'
    ],
    buttonText: 'Get Started',
    buttonLink: 'https://app.workspices.online/',
    buttonColor: 'neutral' as const,
    buttonVariant: 'outline' as const
  },
  {
    name: 'Pro',
    badge: 'Freelancer',
    target: 'Freelancers & Consultants',
    description: 'For professionals who need more power.',
    monthlyPrice: '$15',
    annualPrice: '$12',
    billing: 'per user / month',
    highlight: true,
    features: [
      'Up to 10 Workspaces',
      'Up to 3 Members per Workspace',
      'Unlimited Tasks & Quicklinks',
      'MCP Access (Standard)',
      'Public Views (Watermarked)',
      '1 API Key (Personal use)',
      'Standard Email Support'
    ],
    missingFeatures: [],
    buttonText: 'Start Free Trial',
    buttonLink: 'https://app.workspices.online/',
    buttonColor: 'primary' as const,
    buttonVariant: 'solid' as const
  },
  {
    name: 'Agency / Team',
    target: 'Dev / Marketing Agencies',
    description: 'For teams that need unlimited scale.',
    monthlyPrice: '$35',
    annualPrice: '$29',
    billing: 'per user / month',
    features: [
      'Unlimited Workspaces',
      'Unlimited Members (Pay per seat)',
      'Unlimited Tasks & Quicklinks',
      'MCP Access (Advanced + Team Agents)',
      'Public Views (White label)',
      'Multiple API Keys per Workspace',
      'Priority / Guided Onboarding'
    ],
    missingFeatures: [],
    buttonText: 'Contact Sales',
    buttonColor: 'neutral' as const,
    buttonVariant: 'solid' as const
  }
]
</script>

<template>
  <div id="pricing" class="py-24 sm:py-32 relative">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Simple, transparent pricing</h2>
        <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">Choose the perfect plan for you or your team.</p>
      </div>
    <div class="flex justify-center mb-12 mt-8">
      <!-- Toggle for Annual / Monthly -->
      <div class="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
        <button 
          @click="isAnnual = false" 
          :class="[
            'px-4 py-2 text-sm font-medium rounded-md transition-colors', 
            !isAnnual ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          ]"
        >
          Monthly
        </button>
        <button 
          @click="isAnnual = true" 
          :class="[
            'px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1.5', 
            isAnnual ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          ]"
        >
          Annually
          <span class="text-[10px] bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded-full font-bold">Save 20%</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <UCard
        v-for="plan in plans"
        :key="plan.name"
        :class="['flex flex-col h-full', plan.highlight ? 'ring-2 ring-primary-500 dark:ring-primary-400' : '']"
      >
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ plan.name }}</h3>
            <UBadge v-if="plan.badge" :label="plan.badge" :color="plan.highlight ? 'primary' : 'neutral'" variant="subtle" />
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ plan.target }}</p>
        </div>

        <div class="mb-6 flex items-baseline gap-1">
          <span class="text-4xl font-bold text-gray-900 dark:text-white">{{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{ plan.billing }}</span>
        </div>

        <UButton
          block
          to="https://app.workspices.online/"
          :color="plan.buttonColor"
          :variant="plan.buttonVariant"
          class="mb-8 justify-center"
        >
          {{ plan.buttonText }}
        </UButton>

        <div class="space-y-4 flex-1">
          <ul class="space-y-3">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
              <UIcon name="i-lucide-check-circle-2" class="w-5 h-5 text-primary-500 shrink-0" />
              <span>{{ feature }}</span>
            </li>
            <li v-for="feature in plan.missingFeatures" :key="feature" class="flex items-start gap-3 text-sm text-gray-400 dark:text-gray-500 opacity-75">
              <UIcon name="i-lucide-minus-circle" class="w-5 h-5 shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </UCard>
    </div>

    <!-- Enterprise Section -->
    <div class="mt-16 max-w-4xl mx-auto">
      <UCard class="bg-gray-50 dark:bg-gray-800/50 p-4 sm:p-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Enterprise
              <UBadge label="Custom" color="neutral" variant="solid" />
            </h3>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">Need custom integrations, SLA, or self-hosting options? Let's talk.</p>
          </div>
          <UButton color="neutral" variant="solid" size="lg" to="https://app.workspices.online/">
            Contact Sales
          </UButton>
        </div>
      </UCard>
    </div>
    </UContainer>
  </div>
</template>
