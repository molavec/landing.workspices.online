<script setup lang="ts">
const { t } = useI18n()

const links = computed(() => [
  {
    label: t('tryIt.cta'),
    to: 'https://app.workspices.online',
    icon: 'i-lucide-rocket',
    color: 'primary' as const,
    size: 'xl' as const,
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection id="try-it" class="overflow-hidden">
    <UPageCTA
      :title="$t('tryIt.title')"
      :description="$t('tryIt.description')"
      :links="links"
      class="rounded-3xl overflow-hidden relative"
    >
      <template #default>
        <div class="absolute inset-0 flex items-center justify-end -mr-20 opacity-10 pointer-events-none overflow-hidden">
           <img
            src="/logos/spaces.svg"
            alt="Teamspaces Logo"
            class="w-96 h-96 transform rotate-12"
          />
        </div>
        <p class="text-center text-sm opacity-80 mt-4">
          {{ $t('tryIt.note') }}
        </p>
      </template>
      
    </UPageCTA>
  </UPageSection>
</template>

