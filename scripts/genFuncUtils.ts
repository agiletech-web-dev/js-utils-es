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
  const files = await globby('src/**/*.ts', {
    ignore: ['src/index.ts', 'src/**/*/index.ts', 'src/**/*.spec.ts', 'src/string/_internal/*.ts', 'src/compat/_internal/*.ts'], // Exclude .spec.ts files
  })

  const newFile = files.map((v: any) => {
    const [, _name, i] = v.split('/');

    return {
      name: i,
      package: _name,
      alias: [i.replace('.ts', '')],
    }
  });

  fs.writeFileSync('./scripts/funcUtils.json', JSON.stringify(newFile, null, 2));
})()