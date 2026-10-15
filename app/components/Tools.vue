<script setup lang="ts">
const { t } = useI18n()

const tools = computed(() => [
  {
    name: t('tools.spaces.name'),
    colorOklch: 'oklch(0.63 0.22 25.4)',
    logo: '/logos/spaces.svg',
    description: t('tools.spaces.description'),
    comingSoon: false,
    cta: '#spaces',
    ctaLabel: t('tools.spaces.cta')
  },
  {
    name: t('tools.quicklinks.name'),
    colorOklch: 'oklch(0.70 0.14 144.3)',
    logo: '/logos/quicklinks.svg',
    description: t('tools.quicklinks.description'),
    comingSoon: false,
    cta: '#quicklinks',
    ctaLabel: t('tools.quicklinks.cta')
  },
  {
    name: t('tools.tasks.name'),
    colorOklch: 'oklch(0.56 0.18 259.7)',
    logo: '/logos/tasks.svg',
    description: t('tools.tasks.description'),
    comingSoon: false,
    cta: '#tasks',
    ctaLabel: t('tools.tasks.cta')
  },
  {
    name: t('tools.assets.name'),
    colorOklch: 'oklch(0.78 0.16 77.3)',
    logo: '/logos/assets.svg',
    description: t('tools.assets.description'),
    comingSoon: true
  },
  {
    name: t('tools.skills.name'),
    colorOklch: 'oklch(0.68 0.17 45.4)',
    logo: '/logos/skills.svg',
    description: t('tools.skills.description'),
    comingSoon: true
  }
])
</script>

<template>
  <UPageSection
    id="tools"
    :headline="$t('tools.headline')"
    :title="$t('tools.title')"
    :description="$t('tools.description')"
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
                :label="$t('tools.comingSoon')"
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

