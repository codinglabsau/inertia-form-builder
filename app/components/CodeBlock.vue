<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { createHighlighterCore, type HighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import { Copy, Check } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    code: string
    lang?: string
    copyable?: boolean
  }>(),
  { lang: 'typescript', copyable: true },
)

const html = ref('')
const copied = ref(false)

let highlighter: HighlighterCore | null = null

const highlight = async () => {
  if (!highlighter) {
    highlighter = await createHighlighterCore({
      themes: [import('shiki/themes/github-light.mjs'), import('shiki/themes/github-dark.mjs')],
      langs: [
        import('shiki/langs/typescript.mjs'),
        import('shiki/langs/vue.mjs'),
        import('shiki/langs/vue-html.mjs'),
        import('shiki/langs/json.mjs'),
        import('shiki/langs/javascript.mjs'),
        import('shiki/langs/bash.mjs'),
      ],
      engine: createJavaScriptRegexEngine(),
    })
  }

  html.value = highlighter.codeToHtml(props.code.trim(), {
    lang: props.lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  })
}

const copy = async () => {
  await navigator.clipboard.writeText(props.code.trim())
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

onMounted(highlight)
watch(() => props.code, highlight)
</script>

<template>
  <div class="relative rounded-lg border">
    <button
      v-if="copyable"
      type="button"
      class="absolute top-3 right-3 cursor-pointer rounded-md border bg-background p-1.5 transition-colors hover:bg-muted"
      @click="copy"
    >
      <Check v-if="copied" class="size-4 text-green-500" />

      <Copy v-else class="size-4 text-muted-foreground" />
    </button>

    <div
      class="shiki-wrapper [&_pre]:!m-0 [&_pre]:!rounded-lg [&_pre]:!p-4 [&_pre]:text-sm"
      v-html="html"
    />
  </div>
</template>

<style>
html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
}
</style>
