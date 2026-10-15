<template>
  <UPageSection
    id="spaces"
    :title="$t('sections.spaces.title')"
    :description="$t('sections.spaces.description')"
    orientation="horizontal"
  >
    <template #headline>
      <div class="flex items-center gap-3 mb-2">
        <div
          class="w-12 h-12 rounded-xl p-2 flex items-center justify-center"
          style="background-color: color-mix(in oklch, oklch(0.63 0.22 25.4) 15%, transparent); color: oklch(0.63 0.22 25.4);"
        >
          <img
            src="/logos/spaces.svg"
            alt="Spaces Logo"
            class="w-full h-full object-contain"
          />
        </div>
        <span class="text-xs font-semibold uppercase tracking-wider" style="color: oklch(0.63 0.22 25.4);">{{ $t('sections.spaces.tag') }}</span>
      </div>
    </template>
    <img
      src="/wd_sidebar.jpg"
      alt="Teamspaces Workspace overview"
      class="rounded-xl shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800"
    />
  </UPageSection>
</template>
