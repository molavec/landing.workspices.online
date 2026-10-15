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
    <div class="relative group w-full">
      <div
        class="absolute -inset-1 rounded-2xl opacity-40 dark:opacity-60 blur-xl transition-all duration-500 group-hover:opacity-75"
        style="background: radial-gradient(circle, oklch(0.63 0.22 25.4 / 0.5) 0%, transparent 70%);"
      />
      <img
        src="/wd_sidebar.jpg"
        alt="Teamspaces Spaces overview"
        class="relative rounded-xl ring-1"
        style="
          border-color: color-mix(in oklch, oklch(0.63 0.22 25.4) 30%, transparent);
          box-shadow: 0 20px 40px -15px color-mix(in oklch, oklch(0.63 0.22 25.4) 45%, transparent), 0 0 25px -5px color-mix(in oklch, oklch(0.63 0.22 25.4) 35%, transparent);
        "
      />
    </div>
  </UPageSection>
</template>
