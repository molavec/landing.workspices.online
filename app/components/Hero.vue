<script setup lang="ts">
const { t } = useI18n()

const links = computed(() => [
  {
    label: t('hero.getStarted'),
    to: 'https://app.workspices.online',
    icon: 'i-lucide-square-play',
    color: 'primary' as const,
    size: 'xl' as const,
    class: 'text-base py-3.5 px-6 font-semibold shadow-lg'
  },
  {
    label: t('hero.learnMore'),
    to: '#tools',
    color: 'neutral' as const,
    variant: 'outline' as const,
    trailingIcon: 'i-lucide-arrow-right',
    size: 'xl' as const,
    class: 'text-base py-3.5 px-6'
  }
])

</script>

<template>
  <UPageHero
    :title="$t('hero.title')"
    :description="$t('hero.description')"
    orientation="horizontal"
    :links="links"
  >
    <template #headline>
      <div class="flex items-center">
        <img
          src="/logos/spaces.svg"
          alt="Teamspaces Logo"
          height="80"
          width="80"
          class="w-20 h-20 object-contain"
        />
      </div>
    </template>
    <template #body>
      <div class="flex flex-col gap-2 mt-4">
        <div>
          <UBadge
            :label="$t('hero.beta')"
            color="primary"
            variant="subtle"
            size="md"
          />
        </div>
        <p class="text-sm text-muted">{{ $t('hero.freeNotice') }}</p>
      </div>
    </template>
    
    <img
      src="/wd_marketing.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
    
  </UPageHero>
</template>
