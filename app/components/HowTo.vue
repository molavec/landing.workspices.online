<script setup lang="ts">
const steps = [
  {
    title: 'Create your Workspace',
    description: 'Set up a dedicated space for your project (e.g., “Q4 Campaign”). Invite your team in seconds and start collaborating seamlessly.',
    icon: 'i-lucide-layout-grid'
  },
  {
    title: 'Add Quicklinks & Tasks',
    description: 'Easily integrate links from Drive, Figma, or Trello. Assign quick tasks like “Fix design in Figma” to keep everyone aligned.',
    icon: 'i-lucide-list-todo'
  },
  {
    title: 'Access with a single click',
    description: 'From your dashboard, open what’s essential instantly. Everything else stays closed, saving resources and keeping your focus sharp.',
    icon: 'i-lucide-mouse-pointer-2'
  }
]

const links = [
  {
    label: 'Get started',
    to: 'https://app.workspices.online',
    icon: 'i-lucide-square-play',
    color: 'primary' as const,
    size: 'lg' as const
  }
]
</script>

<template>
  <UPageSection
    id="how-it-works"
    headline="How it works"
    title="Optimized for online teams working with multiple cloud tools"
    orientation="vertical"
    :links="links"
  >
    <template #description>
      <UStepper
        :items="steps"
        orientation="horizontal"
        class="w-full"
      />
    </template>
  </UPageSection>
</template>
