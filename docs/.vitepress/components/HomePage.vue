<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { computed } from 'vue'
import { useTranslate } from '../i18n/composable'

const t = useTranslate()

const members = computed(() => [
  {
    avatar: 'https://github.com/hunghg255.png',
    name: 'hunghg255',
    title: t('Author'),
    links: [
      { icon: 'github', link: 'https://github.com/hunghg255' },
    ],
  },
])
</script>

<template>
  <br />
  <br />
  <div flex="~ col wrap" mt8 items-center>
    <VPTeamMembers size="small" :members="members" />

    <br />

    <a href="https://github.com/agiletech-web-dev/js-utils-es/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=agiletech-web-dev/js-utils-es" />
    </a>
  </div>
</template>
