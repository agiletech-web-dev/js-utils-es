import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { MarkdownTransform } from '.vitepress/plugins/markdownTransform'

const githubRepo = 'agiletech-web-dev/js-utils-es'
const githubLink: 'https://github.com/agiletech-web-dev/js-utils-es' = `https://github.com/${githubRepo}`

export default defineConfig({
  plugins: [
    MarkdownTransform(),
    VueJsx(),
    Unocss(),
    GitChangelog({
      maxGitLogCount: 2000,
      repoURL: () => githubLink,
    }),
    GitChangelogMarkdownSection(),
  ],
  optimizeDeps: {
    include: [
      '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
    ],
    exclude: [
      '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      'vitepress',
    ],
  },
  ssr: {
    noExternal: [
      '@nolebase/vitepress-plugin-enhanced-readabilities',
      '@nolebase/vitepress-plugin-highlight-targeted-heading',
    ],
  },
})
