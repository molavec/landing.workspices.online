<script setup lang="ts">
const clients = [
  {
    name: 'Claude',
    icon: 'i-simple-icons-anthropic',
  },
  {
    name: 'ChatGPT',
    icon: 'i-simple-icons-openai',
  },
  {
    name: 'Antigravity',
    icon: 'i-heroicons-sparkles',
  }
]
</script>

<template>
  <UPageSection
    title="Model Context Protocol"
    description="Drive Teamspaces directly from AI clients like Claude, ChatGPT, and Antigravity with full context integration."
    class="relative"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
      <UCard
        v-for="client in clients"
        :key="client.name"
        class="relative select-none transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-200 dark:border-neutral-800"
      >
        <div class="flex flex-col items-center gap-6 py-6">
          <div class="flex items-center gap-4">
            <UIcon :name="client.icon" class="text-4xl text-primary" />
            <div class="flex flex-col">
              <span class="text-xl font-medium">{{ client.name }}</span>
              <span class="text-sm text-neutral-500 dark:text-neutral-400">MCP Client</span>
            </div>
          </div>
          
          <div class="absolute top-4 right-4">
            <UBadge
              label="Active"
              color="success"
              variant="subtle"
              size="sm"
            />
          </div>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
