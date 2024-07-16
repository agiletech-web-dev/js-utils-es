import fs from 'node:fs/promises'
import sharp from 'sharp'
// import removeMD from 'remove-markdown'
import type { HeadConfig, TransformContext } from 'vitepress'
import funcUtils from '../../scripts/funcUtils.json';

const ogSVGPromise = fs.readFile('../scripts/og-template.svg', 'utf-8')

export async function transformHead({ pageData }: TransformContext) {
  const head: HeadConfig[] = [];

  if (pageData.relativePath === 'index.md') {
    head.push(
      ['meta', { property: 'og:image', content: 'https://js-utils-es.vercel.app/og.png' }],
      ['meta', { property: 'twitter:image', content: 'https://js-utils-es.vercel.app/og.png' }],
    )
    return head
  }

  const fn = funcUtils.find(i => i.name === `${pageData.title}.ts`);
  if (fn?.name) {
    const ogName = fn.name.replace('.ts', '');
    await generateSVG(fn, `../docs/.vitepress/dist/og-${ogName}.png`);
    head.push(
      ['meta', { property: 'og:image', content: `https://js-utils-es.vercel.app/og-${ogName}.png` }],
      ['meta', { property: 'twitter:image', content: `https://js-utils-es.vercel.app/og-${ogName}.png` }],
    )
  }
  else {
    head.push(
      ['meta', { property: 'og:image', content: 'https://js-utils-es.vercel.app/og.png' }],
      ['meta', { property: 'twitter:image', content: 'https://js-utils-es.vercel.app/og.png' }],
    )
  }

  return head;
}

async function generateSVG(fn: any, output: string) {
  // let desc = removeMD(fn.description!)
  //   .replace(/&/g, '&amp;')
  //   .replace(/</g, '&lt;')
  //   .replace(/>/g, '&gt;')
  // desc = desc[0].toUpperCase() + desc.slice(1)
  // const lines = desc.replace(/(?![^\n]{1,45}$)([^\n]{1,45})\s/g, '$1\n')
  //   .split('\n');

  const ogName = fn.name.replace('.ts', '');

  const data = {
    name: ogName,
    package: `js-utils-es/${fn.package}`,
    line1: 'A state-of-the-art, high-performance JavaScript utility',
    line2: '',
    line3: '',
  }
  const ogSVg = await ogSVGPromise
  const svg = ogSVg.replace(/\{\{([^}]+)\}\}/g, (_, name: keyof typeof data) => data[name])

  // eslint-disable-next-line no-console
  console.log(`Generating ${output}`);

  try {
    // eslint-disable-next-line node/prefer-global/buffer
    await sharp(Buffer.from(svg))
      .resize(1200 * 1.1, 630 * 1.1)
      .png()
      .toFile(output)
  }
  catch (e) {
    console.error('Error generating', { filename: output, ...data, svg })
    console.error(e)
  }
}
