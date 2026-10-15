<script setup lang="ts">
const links = [
  {
    label: 'Get started',
    to: 'https://app.workspices.online',
    icon: 'i-lucide-square-play',
    color: 'primary' as const,
    size: 'lg' as const
  },
  {
    label: 'Learn more',
    to: '#benefits',
    color: 'neutral' as const,
    variant: 'outline' as const,
    trailingIcon: 'i-lucide-arrow-right',
    size: 'lg' as const
  }
]

</script>

<template>
  <UPageHero
    title="Teamspaces makes your digital chaos feel effortless"
    description="Quicklinks and Task connect you instantly to the spaces where your team collaborates"
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
            label="We are in Beta"
            color="primary"
            variant="subtle"
            size="md"
          />
        </div>
        <p class="text-sm text-muted">* Start for free. No credit card required.</p>
      </div>
    </template>
    
    <img
      src="/wd_marketing.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
    
  </UPageHero>
</template>
