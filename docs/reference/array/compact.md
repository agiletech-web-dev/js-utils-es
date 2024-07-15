# compact

Removes falsey values (`false`, `null`, `0`, `''`, `undefined`, `NaN`) from an array.

## Signature

```typescript
function compact<T>(arr: T[]): Array<Exclude<T, false | null | 0 | '' | undefined>>;
```

### Parameters

- `arr` (`T[]`): The input array to remove falsey values.

### Returns

(`Array<Exclude<T, false | null | 0 | '' | undefined>>`) A new array with all falsey values removed.

## Examples

```typescript twoslash
import { compact } from 'js-utils-es/array';

compact([0, 1, false, 2, '', 3, null, undefined, 4, Number.NaN, 5]);
// Returns: [1, 2, 3, 4, 5]
```
