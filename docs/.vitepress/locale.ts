import type { DefaultTheme, HeadConfig, LocaleConfig } from 'vitepress'
import { createTranslate } from './i18n/utils'

const docsLink = 'https://js-utils-es.vercel.app'
const githubRepo = 'agiletech-web-dev/js-utils-es'
const githubLink: 'https://github.com/agiletech-web-dev/js-utils-es' = `https://github.com/${githubRepo}`

export function getLocaleConfig(lang: string) {
  const t = createTranslate(lang)

  const urlPrefix = lang && lang !== 'en' ? `/${lang}` : ''
  const title = t('JS Utilities')
  const description = t('A state-of-the-art, high-performance JavaScript utility library with a small bundle size and strong type annotations.')

  const head: HeadConfig[] = [
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: `${docsLink}/og.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: docsLink }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: `${docsLink}/og.png` }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#914796' }],
  ]

  const nav: DefaultTheme.NavItem[] = [
    {
      text: t('Guide'),
      link: `${urlPrefix}/guide/getting-started`,
      activeMatch: 'guide',
    },
    {
      text: t('Reference'),
      link: `${urlPrefix}/reference/array/chunk`,
      activeMatch: 'reference',
    },
  ]

  const sidebar: DefaultTheme.SidebarItem[] = [
    {
      text: t('Guide'),
      items: [
        {
          text: t('Getting Started'),
          link: `${urlPrefix}/guide/getting-started`,
        },
      ],
    },
    {
      text: t('Reference'),
      items: [
        {
          text: t('Array Utilities'),
          items: [
            { text: 'chunk', link: '/reference/array/chunk' },
            { text: 'countBy', link: '/reference/array/countBy' },
            { text: 'compact', link: '/reference/array/compact' },
            { text: 'difference', link: '/reference/array/difference' },
            { text: 'differenceBy', link: '/reference/array/differenceBy' },
            { text: 'differenceWith', link: '/reference/array/differenceWith' },
            { text: 'drop', link: '/reference/array/drop' },
            { text: 'dropWhile', link: '/reference/array/dropWhile' },
            { text: 'dropRight', link: '/reference/array/dropRight' },
            { text: 'dropRightWhile', link: '/reference/array/dropRightWhile' },
            { text: 'fill', link: '/reference/array/fill' },
            { text: 'toFilled', link: '/reference/array/toFilled' },
            { text: 'flatten', link: '/reference/array/flatten' },
            { text: 'flattenDeep', link: '/reference/array/flattenDeep' },
            { text: 'forEachRight', link: '/reference/array/forEachRight' },
            { text: 'groupBy', link: '/reference/array/groupBy' },
            { text: 'intersection', link: '/reference/array/intersection' },
            { text: 'intersectionBy', link: '/reference/array/intersectionBy' },
            {
              text: 'intersectionWith',
              link: '/reference/array/intersectionWith',
            },
            { text: 'keyBy', link: '/reference/array/keyBy' },
            { text: 'minBy', link: '/reference/array/minBy' },
            { text: 'maxBy', link: '/reference/array/maxBy' },
            { text: 'orderBy', link: '/reference/array/orderBy' },
            { text: 'partition', link: '/reference/array/partition' },
            { text: 'sample', link: '/reference/array/sample' },
            { text: 'sampleSize', link: '/reference/array/sampleSize' },
            { text: 'shuffle', link: '/reference/array/shuffle' },
            { text: 'take', link: '/reference/array/take' },
            { text: 'takeWhile', link: '/reference/array/takeWhile' },
            { text: 'takeRight', link: '/reference/array/takeRight' },
            { text: 'takeRightWhile', link: '/reference/array/takeRightWhile' },
            { text: 'union', link: '/reference/array/union' },
            { text: 'unionBy', link: '/reference/array/unionBy' },
            { text: 'unionWith', link: '/reference/array/unionWith' },
            { text: 'uniq', link: '/reference/array/uniq' },
            { text: 'uniqBy', link: '/reference/array/uniqBy' },
            { text: 'uniqWith', link: '/reference/array/uniqWith' },
            { text: 'unzip', link: '/reference/array/unzip' },
            { text: 'unzipWith', link: '/reference/array/unzipWith' },
            { text: 'without', link: '/reference/array/without' },
            { text: 'xor', link: '/reference/array/xor' },
            { text: 'xorBy', link: '/reference/array/xorBy' },
            { text: 'xorWith', link: '/reference/array/xorWith' },
            { text: 'zip', link: '/reference/array/zip' },
            { text: 'zipObject', link: '/reference/array/zipObject' },
            { text: 'zipWith', link: '/reference/array/zipWith' },
            { text: 'head', link: '/reference/array/head' },
            { text: 'tail', link: '/reference/array/tail' },
            { text: 'last', link: '/reference/array/last' },
            { text: 'initial', link: '/reference/array/initial' },
          ],
        },
        {
          text: t('Function Utilities'),
          items: [
            { text: 'debounce', link: '/reference/function/debounce' },
            { text: 'throttle', link: '/reference/function/throttle' },
            { text: 'negate', link: '/reference/function/negate' },
            { text: 'once', link: '/reference/function/once' },
            { text: 'noop', link: '/reference/function/noop' },
          ],
        },
        {
          text: t('Math Utilities'),
          items: [
            { text: 'clamp', link: '/reference/math/clamp' },
            { text: 'inRange', link: '/reference/math/inRange' },
            { text: 'mean', link: '/reference/math/mean' },
            { text: 'meanBy', link: '/reference/math/meanBy' },
            { text: 'random', link: '/reference/math/random' },
            { text: 'randomInt', link: '/reference/math/randomInt' },
            { text: 'range', link: '/reference/math/range' },
            { text: 'round', link: '/reference/math/round' },
            { text: 'sum', link: '/reference/math/sum' },
            { text: 'sumBy', link: '/reference/math/sumBy' },
            { text: 'lerp', link: '/reference/math/lerp' },
            { text: 'remap', link: '/reference/math/remap' },
          ],
        },
        {
          text: t('Object Utilities'),
          items: [
            { text: 'clone', link: '/reference/object/clone' },
            { text: 'omit', link: '/reference/object/omit' },
            { text: 'omitBy', link: '/reference/object/omitBy' },
            { text: 'pick', link: '/reference/object/pick' },
            { text: 'pickBy', link: '/reference/object/pickBy' },
            { text: 'invert', link: '/reference/object/invert' },
          ],
        },
        {
          text: t('Predicates'),
          items: [
            { text: 'isEqual', link: '/reference/predicate/isEqual' },
            { text: 'isNil', link: '/reference/predicate/isNil' },
            { text: 'isNotNil', link: '/reference/predicate/isNotNil' },
            { text: 'isNull', link: '/reference/predicate/isNull' },
            { text: 'isUndefined', link: '/reference/predicate/isUndefined' },
          ],
        },
        {
          text: t('Promise Utilities'),
          items: [{ text: 'delay', link: '/reference/promise/delay' }],
        },
        {
          text: t('String Utilities'),
          items: [
            { text: 'snakeCase', link: '/reference/string/snakeCase' },
            { text: 'kebabCase', link: '/reference/string/kebabCase' },
            { text: 'lowerCase', link: '/reference/string/lowerCase' },
            { text: 'capitalize', link: '/reference/string/capitalize' },
          ],
        },
      ],
    },
  ]

  const themeConfig: DefaultTheme.Config = {
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: githubLink },
    ],
    footer: {
      message: t('Made with ❤️'),
      copyright:
        'MIT License © 2024-PRESENT <a href="https://github.com/hunghg255">hunghg255</a>',
    },
    editLink: {
      pattern: `${githubLink}/edit/main/docs/:path`,
      text: t('Edit this page on GitHub'),
    },
  }

  if (lang === 'zh-CN') {
    Object.assign(themeConfig, {
      outline: {
        label: '页面导航',
      },
      lastUpdatedText: '最后更新于',
      darkModeSwitchLabel: '外观',
      sidebarMenuLabel: '目录',
      returnToTopLabel: '返回顶部',
      langMenuLabel: '选择语言',
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
    } satisfies DefaultTheme.Config)
  }

  const localeConfig: LocaleConfig<DefaultTheme.Config>[string] = {
    label: t('English'),
    lang: t('en'),
    title,
    description,
    head,
    themeConfig,
  }

  return localeConfig
}
