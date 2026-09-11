<template>
    <div class="group flex items-baseline gap-4 py-4">
      <span class="shrink-0 font-mono text-xs text-dimmed/70 tabular-nums">
        {{ String(idx + 1).padStart(2, '0') }}
      </span>
      <UIcon
        :name="skill.icon"
        class="size-5 shrink-0 translate-y-0.5 text-dimmed transition-colors group-hover:text-primary"
      />
      <span class="min-w-0 flex-1">
        <span class="flex items-baseline justify-between gap-3">
          <span class="truncate text-sm font-medium text-highlighted">
            {{ skill.name }}
          </span>
          <span class="shrink-0 font-mono text-[11px] uppercase tracking-widest text-dimmed">
            {{ skill.comfort }}
          </span>
        </span>
        <span class="mt-0.5 block text-sm text-dimmed">
          {{ skill.note }}
        </span>
      </span>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
  skill: {
    name: string;
    comfort: string;
    icon: string;
    note: string;
  };
  idx: number;
}>();
</script>
