<template>
  <UPageSection
    id="tasks"
    title="Tasks"
    description="Tasks in Teamspaces aren't just entries in a list; they are directly linked to your project resources. Assign quick actions to specific Quicklinks, ensuring your team knows exactly what to do and where to do it, keeping momentum high and confusion low."
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
        <span class="text-xs font-semibold uppercase tracking-wider" style="color: oklch(0.56 0.18 259.7);">Contextual Actions</span>
      </div>
    </template>
    <img
      src="/tasks.jpg"
      alt="Teamspaces Tasks management"
      class="rounded-xl shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800"
    />
  </UPageSection>
</template>
