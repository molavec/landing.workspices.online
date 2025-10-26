<script setup lang="ts">
// const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: "Workspices",
  description: "More than bookmarks"
})
</script>

<template>
  <!-- <ContentRenderer v-if="home" :value="home" /> -->
  <div class="flex flex-col gap-4 items-center justify-center h-lvh w-full">
    <div class="text-4xl">Workspices</div>
    <img src="/workspices.png" alt="workspices image" class="w-md" />
    <a href="https://beta.workspices.online" class="">Go to App</a>
  </div>

</template>