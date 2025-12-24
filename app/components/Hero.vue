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
    title="Workspices makes your digital chaos feel effortless."
    description="Quicklinks and Task connect you instantly to the spaces where your team collaborates."
    headline="We are in Beta."
    orientation="horizontal"
    :links="links"
  >
    <img
      src="/hero_01.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
</template>
