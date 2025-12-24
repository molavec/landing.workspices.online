<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />
    <UMain>
      <slot />
    </UMain>
    <AppFooter />
  </UApp>
</template>