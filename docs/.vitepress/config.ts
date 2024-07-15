import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import ts from 'typescript'
import { getLocaleConfig } from './locale'

const docsLink = 'https://js-utils-es.vercel.app'

export default defineConfig({
  lastUpdated: true,
  locales: {
    root: getLocaleConfig('en'),
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },
  sitemap: {
    hostname: docsLink,
  },
  markdown: {
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            jsx: ts.JsxEmit.Preserve,
            jsxFactory: 'vue',
            types: ['unplugin-vue-macros/macros-global', 'vue/jsx'],
          },
        },
      }),
    ],
  },
})
