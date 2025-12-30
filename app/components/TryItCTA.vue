<script setup lang="ts">
const links = [
  {
    label: 'Get started for free',
    to: 'https://app.workspices.online',
    icon: 'i-lucide-rocket',
    color: 'primary' as const,
    size: 'xl' as const,
    trailingIcon: 'i-lucide-arrow-right'
  }
]
</script>

<template>
  <UPageSection id="try-it" class="overflow-hidden">
    <UPageCTA
      title="Ready to transform your digital workflow?"
      description="Stop hunting through tabs and menus. Experience the bliss of an organized workspace where everything you need is just one click away."
      :links="links"
      class="rounded-3xl overflow-hidden relative"
    >
      <template #default>
        <div class="absolute inset-0 flex items-center justify-end -mr-20 opacity-10 pointer-events-none overflow-hidden">
           <img
            src="/workspices_icon.png"
            alt="Workspices Logo"
            class="w-96 h-96 transform rotate-12"
          />
        </div>
        <p class="text-center text-sm opacity-80 mt-4">
          * Join our beta today. No credit card required.
        </p>
      </template>
      
    </UPageCTA>
  </UPageSection>
</template>

