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
    description="The MCP tool will be available soon. Drive Workspices directly from AI clients like Claude, ChatGPT, and Antigravity."
    class="relative"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
      <UCard
        v-for="client in clients"
        :key="client.name"
        class="relative select-none"
      >
        <div class="flex flex-col items-center gap-6 py-6">
          <div class="flex items-center gap-4 grayscale opacity-80">
            <UIcon :name="client.icon" class="text-4xl text-black dark:text-white" />
            <div class="flex flex-col">
              <span class="text-xl font-medium">{{ client.name }}</span>
              <span class="">MCP Client</span>
            </div>
          </div>
          
          <div class="absolute top-4 right-4">
            <UBadge
              label="Available Soon"
              color="error"
              variant="subtle"
            />
          </div>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
