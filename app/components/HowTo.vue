<script setup lang="ts">
const steps = [
  {
    title: 'Create your Space',
    description: 'Set up a dedicated space for your client or project in seconds. Invite your team and keep all your mission-critical resources centralized.',
    icon: 'i-lucide-layout-grid'
  },
  {
    title: 'Add Quicklinks & Tasks',
    description: 'Pin direct access links to your Drive files, Figma boards, or Github repos. Attach quick actions to specific resources so your team always knows what to do.',
    icon: 'i-lucide-list-todo'
  },
  {
    title: 'Launch in One Click',
    description: 'Access everything your team needs straight from your dashboard. Keep tabs closed, reduce digital clutter, and maintain maximum focus.',
    icon: 'i-lucide-mouse-pointer-2'
  }
]

const links = [
  {
    label: 'Get started for free',
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
    description="A seamless workflow designed to eliminate tab clutter and keep your team aligned from day one."
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
