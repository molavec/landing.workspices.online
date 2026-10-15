<script setup lang="ts">
const tools = [
  {
    name: 'Spaces',
    colorOklch: 'oklch(0.63 0.22 25.4)',
    logo: '/logos/spaces.svg',
    description: 'The team’s control center and cockpit, featuring its signature modular layout and seamless interconnections.',
    comingSoon: false,
    cta: '#spaces',
    ctaLabel: 'Explore Spaces'
  },
  {
    name: 'Quicklinks',
    colorOklch: 'oklch(0.70 0.14 144.3)',
    logo: '/logos/quicklinks.svg',
    description: 'Instant access and cross-linking across resources, represented by fluid, interconnected nodes.',
    comingSoon: false,
    cta: '#quicklinks',
    ctaLabel: 'Explore Quicklinks'
  },
  {
    name: 'Tasks',
    colorOklch: 'oklch(0.56 0.18 259.7)',
    logo: '/logos/tasks.svg',
    description: 'Tasks and action lists organized in an organic fluid flow with smart contextual bullet points.',
    comingSoon: false,
    cta: '#tasks',
    ctaLabel: 'Explore Tasks'
  },
  {
    name: 'Assets',
    colorOklch: 'oklch(0.78 0.16 77.3)',
    logo: '/logos/assets.svg',
    description: 'A refreshed concept for team resources, deliverables, and documents, evoking naturally layered fluid pages.',
    comingSoon: true
  },
  {
    name: 'Skills',
    colorOklch: 'oklch(0.68 0.17 45.4)',
    logo: '/logos/skills.svg',
    description: 'Shared AI prompts, capabilities, and integrations modeled as neural connections that simulate continuous learning and expansion.',
    comingSoon: true
  }
]
</script>

<template>
  <UPageSection
    id="tools"
    headline="Modular Ecosystem"
    title="Tools built for collaborative teams"
    description="Every Teamspaces module is purposefully designed to enhance your team's focus, productivity, and connection."
    class="relative"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
      <UCard
        v-for="tool in tools"
        :key="tool.name"
        class="relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-200 dark:border-neutral-800 flex flex-col group"
        :style="{
          '--tool-color': tool.colorOklch
        }"
      >
        <div class="flex flex-col h-full gap-4 p-2 justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div
                class="w-14 h-14 rounded-2xl p-2.5 flex items-center justify-center transition-transform group-hover:scale-105"
                :style="{
                  backgroundColor: `color-mix(in oklch, ${tool.colorOklch} 15%, transparent)`,
                  color: tool.colorOklch
                }"
              >
                <img
                  :src="tool.logo"
                  :alt="tool.name"
                  class="w-full h-full object-contain"
                />
              </div>
              <UBadge
                v-if="tool.comingSoon"
                label="Coming Soon"
                color="error"
                variant="subtle"
                size="sm"
              />
            </div>

            <div>
              <h3 class="text-xl font-bold tracking-tight text-neutral-900 dark:text-white capitalize">
                {{ tool.name }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {{ tool.description }}
              </p>
            </div>
          </div>

          <div v-if="tool.cta" class="pt-2">
            <UButton
              :to="tool.cta"
              :label="tool.ctaLabel || 'Learn more'"
              trailing-icon="i-lucide-arrow-down"
              variant="subtle"
              color="primary"
              size="sm"
            />
          </div>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>

<style scoped>
.group:hover {
  border-color: color-mix(in oklch, var(--tool-color) 60%, transparent);
}
</style>

