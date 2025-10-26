<script setup lang="ts">
// const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: "Workspices",
  description: "More than bookmarks"
})
</script>

<template>
  <!-- <ContentRenderer v-if="home" :value="home" /> -->
  <div class="flex flex-col gap-4 items-center justify-center h-lvh w-full bg-[#fbf7f1] text-[#3e443e]">
    <!-- <div class="text-4xl">Workspices</div> -->
    <img src="/workspices.png" alt="workspices image" class="max-w-xs" />
    <a href="https://app.workspices.online" class="py-2 px-4 bg-[#82c435] text-white font-semibold">Start Now</a>
  </div>

</template>