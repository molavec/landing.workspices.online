<script setup lang="ts">
const features = [
  {
    title: 'Time Savings',
    description: 'Go straight to the sites where you actually work. Forget wasting minutes navigating menus or search bars—everything is just one click away.',
    icon: 'i-lucide-timer'
  },
  {
    title: 'Fewer Tabs, More Focus',
    description: 'Optimize both your RAM and your attention. Keep only the essential tabs open for your workflow and eliminate digital noise.',
    icon: 'i-lucide-layers'
  },
  {
    title: 'Smart Collaborative Workspaces',
    description: 'Organize spaces by client or project. Share key links and tasks with your team so everyone has instant access and works in sync.',
    icon: 'i-lucide-users'
  },
  // {
  //   title: 'Integrated Task Management',
  //   description: 'No need for another complicated app. Assign quick tasks directly linked to the web resources you use, keeping everything in one place.',
  //   icon: 'i-lucide-clipboard-check'
  // }
]
</script>

<template>
  <UPageSection
    id="features"
    title="Workspices is designed to help you focus on what matters most."
    description=""
    orientation="vertical"
    :features="features"
  >
    
  </UPageSection>
</template>
