# pChain

Utility for managing multiple promises.

## Signature

```typescript
function pChain<T = any>(items?: Iterable<T>): PInstance<T>;
```

### Parameters

- `items` (`Iterable`): An optional iterable of items to chain.

### Returns

(`PInstance<void>`): A `PInstance` object that can be used to chain promises.

## Description

```ts
declare class PInstance<T = any> extends Promise<Awaited<T>[]> {
  items: Iterable<T>;
  private promises;
  get promise(): Promise<Awaited<T>[]>;
  constructor(items?: Iterable<T>);
  add(...args: (T | Promise<T>)[]): void;
  map<U>(fn: (value: Awaited<T>, index: number) => U): PInstance<Promise<U>>;
  filter(fn: (value: Awaited<T>, index: number) => boolean | Promise<boolean>): PInstance<Promise<T>>;
  forEach(fn: (value: Awaited<T>, index: number) => void): Promise<void>;
  reduce<U>(fn: (previousValue: U, currentValue: Awaited<T>, currentIndex: number, array: Awaited<T>[]) => U, initialValue: U): Promise<U>;
  clear(): void;
  then(fn?: () => PromiseLike<any>): Promise<any>;
  catch(fn?: (err: unknown) => PromiseLike<any>): Promise<any>;
  finally(fn?: () => void): Promise<Awaited<T>[]>;
}
```

## Examples

```typescript
import { pChain } from 'js-utils-es/promise';

const items = [1, 2, 3, 4, 5];

await pChain(items)
  .map(async i => await multiply(i, 3))
  .filter(async i => await isEven(i))

// Result: [6, 12]
```
