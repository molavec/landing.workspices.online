<script setup lang="ts">
const { t } = useI18n()

const features = computed(() => [
  {
    title: t('features.timeSavingsTitle'),
    description: t('features.timeSavingsDesc'),
    icon: 'i-lucide-timer'
  },
  {
    title: t('features.focusTitle'),
    description: t('features.focusDesc'),
    icon: 'i-lucide-layers'
  },
  {
    title: t('features.workspacesTitle'),
    description: t('features.workspacesDesc'),
    icon: 'i-lucide-users'
  }
])
</script>

<template>
  <UPageSection
    id="features"
    :title="$t('features.title')"
    description=""
    orientation="vertical"
    :features="features"
  >
    
  </UPageSection>
</template>
