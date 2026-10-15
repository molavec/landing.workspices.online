<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  {
    title: t('howItWorks.step1Title'),
    description: t('howItWorks.step1Desc'),
    icon: 'i-lucide-layout-grid'
  },
  {
    title: t('howItWorks.step2Title'),
    description: t('howItWorks.step2Desc'),
    icon: 'i-lucide-list-todo'
  },
  {
    title: t('howItWorks.step3Title'),
    description: t('howItWorks.step3Desc'),
    icon: 'i-lucide-mouse-pointer-2'
  }
])

const links = computed(() => [
  {
    label: t('howItWorks.getStarted'),
    to: 'https://app.workspices.online',
    icon: 'i-lucide-square-play',
    color: 'primary' as const,
    size: 'lg' as const
  }
])
</script>

<template>
  <UPageSection
    id="how-it-works"
    :headline="$t('howItWorks.headline')"
    :title="$t('howItWorks.title')"
    :description="$t('howItWorks.description')"
    orientation="vertical"
    :links="links"
  >
    <div class="w-full mt-8">
      <UStepper
        :items="steps"
        orientation="horizontal"
        class="w-full"
      />
    </div>
  </UPageSection>
</template>
