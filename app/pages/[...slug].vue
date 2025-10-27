<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div class="p-10">

    <ContentRenderer
      v-if="page"
      :value="page"
    />

  </div>
</template>
