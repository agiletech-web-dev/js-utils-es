import Theme from 'vitepress/theme'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import type { EnhanceAppContext } from 'vitepress'
import Layout from './Layout.vue'
import 'uno.css'
import './style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@shikijs/vitepress-twoslash/style.css'

export default {
  ...Theme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(NolebaseGitChangelogPlugin, {
      mapAuthors: [
        {
          name: 'hunghg255',
          username: 'hunghg255',
          mapByNameAliases: ['Hung Hoang', 'Hoang Hung'],
          mapByEmailAliases: ['giahunghust@gmail.com'],
        },
      ],
      numCommitHashLetters: 7,
    })
    app.use(TwoslashFloatingVue)
  },
}
