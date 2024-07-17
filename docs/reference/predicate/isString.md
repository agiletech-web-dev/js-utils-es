# isString

The `isString` function checks if a value is a `string`.

## Signature

```typescript
function isString(val: unknown): val is string
```

## Parameters

- **`val`**: `any` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a `string`, otherwise `false`.

## Examples

```typescript
import { isString } from 'js-utils-es/predicate';

isString('1'); // true

isString(1); // false
isString(true); // false
isString(new Date()); // false
isString(() => {}); // false
```
