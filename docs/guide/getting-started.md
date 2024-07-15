---
description: How to install js-utils-es

next:
  text: Reference
  link: ./reference/array/chunk
---

# Installation

js-utils-es is available via [npm](https://npmjs.com/package/js-utils-es) for Node.js and Bun

## Node.js

js-utils-es supports Node.js 18 or later. Install js-utils-es with the following command:

::: code-group

```sh [npm]
npm install js-utils-es
```

```sh [pnpm]
pnpm install js-utils-es
```

```sh [yarn]
yarn add js-utils-es
```

:::

Note that the package name includes an additional scope, distinct from npm

```typescript
import { sum } from 'js-utils-es';

sum([1, 2, 3]);
```

## Bun

js-utils-es is also available on Bun. You can install it via the following command:

```sh
bun add js-utils-es
```
