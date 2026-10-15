<template>
  <UPageSection
    id="tasks"
    :title="$t('sections.tasks.title')"
    :description="$t('sections.tasks.description')"
    orientation="horizontal"
  >
    <template #headline>
      <div class="flex items-center gap-3 mb-2">
        <div
          class="w-12 h-12 rounded-xl p-2 flex items-center justify-center"
          style="background-color: color-mix(in oklch, oklch(0.56 0.18 259.7) 15%, transparent); color: oklch(0.56 0.18 259.7);"
        >
          <img
            src="/logos/tasks.svg"
            alt="Tasks Logo"
            class="w-full h-full object-contain"
          />
        </div>
        <span class="text-xs font-semibold uppercase tracking-wider" style="color: oklch(0.56 0.18 259.7);">{{ $t('sections.tasks.tag') }}</span>
      </div>
    </template>
    <div class="relative group w-full">
      <div
        class="absolute -inset-1 rounded-2xl opacity-40 dark:opacity-60 blur-xl transition-all duration-500 group-hover:opacity-75"
        style="background: radial-gradient(circle, oklch(0.56 0.18 259.7 / 0.5) 0%, transparent 70%);"
      />
      <img
        src="/tasks.jpg"
        alt="Teamspaces Tasks management"
        class="relative rounded-xl ring-1"
        style="
          border-color: color-mix(in oklch, oklch(0.56 0.18 259.7) 30%, transparent);
          box-shadow: 0 20px 40px -15px color-mix(in oklch, oklch(0.56 0.18 259.7) 45%, transparent), 0 0 25px -5px color-mix(in oklch, oklch(0.56 0.18 259.7) 35%, transparent);
        "
      />
    </div>
  </UPageSection>
</template>
