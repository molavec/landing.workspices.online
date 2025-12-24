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
    headline="We are in Beta."
    title="Workspices makes your digital chaos feel effortless."
    description="Quicklinks and Task connect you instantly to the spaces where your team collaborates."
    orientation="horizontal"
    :links="links"
  >
    <template #headline>
      <div>
        <img
          src="/workspices_icon.png"
          alt="App screenshot"
          height="80"
          width="80"
          class=""
        />
        <span class="text-md font-semibold text-primary">We are in Beta.</span>
      </div>
    </template>
    <template #body>
      <p class="text-sm text-muted">* Start for free. No credit card required.</p>
    </template>
    
    <img
      src="/hero_01.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
    
  </UPageHero>
</template>
