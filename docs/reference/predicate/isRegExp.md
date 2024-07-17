# isRegExp

The `isRegExp` function checks if a value is a `RegExp`.

## Signature

```typescript
function isRegExp(val: any): val is RegExp
```

## Parameters

- **`val`**: `any` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a `RegExp`, otherwise `false`.

## Examples

```typescript
import { isRegExp } from 'js-utils-es/predicate';

isRegExp(/[az]/g); // true

isRegExp(1); // false
isRegExp(true); // false
isRegExp(new Date()); // false
isRegExp(() => {}); // false
```
