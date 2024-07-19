import fs from 'node:fs';
import { globby } from 'globby';
// export const funcUtils = [
//   {
//     name: 'chunk.ts',
//     package: 'array',
//     alias: ['chunk'],
//   },
//   {
//     name: 'pChain.ts',
//     package: 'promise',
//     alias: ['pChain'],
//   },
// ]

(async () => {
  const files = await globby('packages/core/src/**/*.ts', {
    ignore: ['packages/core/src/index.ts', 'packages/core/src/**/*/index.ts', 'packages/core/src/**/*.spec.ts', 'packages/core/src/string/_internal/*.ts', 'packages/core/src/predicate/_internal/*.ts', 'packages/core/src/compat/_internal/*.ts'], // Exclude .spec.ts files
  })

  const newFile = files.map((v: any) => {
    const vv = v.replace('packages/core/', '');
    const [, _name, i] = vv.split('/');

    return {
      name: i,
      package: _name,
      alias: [i.replace('.ts', '')],
    }
  });

  fs.writeFileSync('./scripts/funcUtils.json', JSON.stringify(newFile, null, 2));
})()
