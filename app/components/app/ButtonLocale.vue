<template>
  <USelectMenu
    :search-input="false"
    :items="localesItems"
    :model-value="currentLocale"
    @update:model-value="handleLocaleChange"
  />
</template>

<script lang="ts" setup>
import type { SelectMenuItem } from '@nuxt/ui';
import type { LocaleObject } from '@nuxtjs/i18n';

const { locales, setLocale, locale } = useI18n()

const localesItems = computed<SelectMenuItem[]>(() =>
  (locales.value as LocaleObject[]).map((l: LocaleObject) => ({
    label: l.code.toUpperCase(),
    value: l.code,
  })),
)

const currentLocale = computed<string>(() => locale.value.toUpperCase())

function handleLocaleChange(value: unknown) {
  const code = typeof value === 'string' ? value : (value as { value?: unknown } | undefined)?.value
  if (typeof code === 'string')
    setLocale(code as 'en' | 'sk')
}
</script>
