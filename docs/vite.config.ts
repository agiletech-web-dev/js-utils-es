import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

const githubRepo = 'agiletech-web-dev/js-utils-es'
const githubLink: 'https://github.com/agiletech-web-dev/js-utils-es' = `https://github.com/${githubRepo}`

export default defineConfig({
  plugins: [
    VueJsx(),
    Unocss(),
    GitChangelog({
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
