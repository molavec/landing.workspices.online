<script setup lang="ts">
const { data: archives } = await useAsyncData(() => queryCollection('content').path('/').all())

useSeoMeta({
  title: 'Workspices Blog',
  description: 'News about workspices features and stories about productivity.'
})
</script>

<template>
  <div>Blog</div>

  <div v-for="archive in archives">
    <h2>{{archive.title}}</h2>
    <p>{{archive.description}}</p>
  </div>

  <!-- <pre>
    {{ archives }}
  </pre> -->
</template>