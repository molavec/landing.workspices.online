<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()
const { locale, setLocale } = useI18n()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Pricing',
  to: '#pricing',
  active: activeHeadings.value.includes('pricing')
}, {
  label: 'Testimonials',
  to: '#testimonials',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <template #right>
      <!-- <div class="menu flex items-center">
        <UNavigationMenu
          :items="items"
          variant="link"
          class="menu hidden lg:block"
        />
      </div> -->

      <UButton
        :label="$t('nav.getStarted')"
        to="https://app.teamspaces.online"
        color="primary"
        variant="solid"
        class="hidden lg:block border-0 shadow-none font-medium"
      />

      <UButton
        variant="ghost"
        color="neutral"
        size="sm"
        :label="locale === 'en' ? 'ES' : 'EN'"
        @click="setLocale(locale === 'en' ? 'es' : 'en')"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <!-- <div class="menu">
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </div> -->
      <UButton
        class="mt-4 border-0"
        :label="$t('nav.getStarted')"
        to="https://app.teamspaces.online"
        color="primary"
        variant="solid"
        block
      />
    </template>
  </UHeader>
</template>

<style scoped>
  .menu ::v-deep(ul) {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
