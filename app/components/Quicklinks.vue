<template>
  <UPageSection
    id="quicklinks"
    title="Quicklinks"
    description="Connect you and your team directly to your Google Drive folders, Figma designs, Trello boards, or any web resource. No more navigating menus or searching through bookmarks—everything your project needs is pinned and ready."
    orientation="horizontal"
    :reverse="true"
  >
    <template #headline>
      <div class="flex items-center gap-3 mb-2">
        <div
          class="w-12 h-12 rounded-xl p-2 flex items-center justify-center"
          style="background-color: color-mix(in oklch, oklch(0.70 0.14 144.3) 15%, transparent); color: oklch(0.70 0.14 144.3);"
        >
          <img
            src="/logos/quicklinks.svg"
            alt="Quicklinks Logo"
            class="w-full h-full object-contain"
          />
        </div>
        <span class="text-xs font-semibold uppercase tracking-wider" style="color: oklch(0.70 0.14 144.3);">Direct Access</span>
      </div>
    </template>
    <img
      src="/quicklinks.jpg"
      alt="Teamspaces Quicklinks interface"
      class="rounded-xl shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800"
    />
  </UPageSection>
</template>
