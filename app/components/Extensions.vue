<script setup lang="ts">
const browsers = [
  {
    name: 'Google Chrome',
    icon: 'i-simple-icons-googlechrome',
  },
  {
    name: 'Brave',
    icon: 'i-simple-icons-brave',
  },
  {
    name: 'Opera',
    icon: 'i-simple-icons-opera',
  }
]
</script>

<template>
  <UPageSection
    :title="$t('extensions.title')"
    :description="$t('extensions.description')"
    class="relative"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
      <UCard
        v-for="browser in browsers"
        :key="browser.name"
        class="relative select-none"
      >
        <div class="flex flex-col items-center gap-6 py-6">
          <div class="flex items-center gap-4 opacity-40 grayscale">
            <UIcon :name="browser.icon" class="text-4xl" />
            <div class="flex flex-col">
              <span class="text-xl font-medium">{{ browser.name }}</span>
              <span class="">{{ $t('extensions.extension') }}</span>
            </div>
          </div>
          
          <div class="absolute top-4 right-4">
            <UBadge
              :label="$t('extensions.comingSoon')"
              color="error"
              variant="subtle"
            />
          </div>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
