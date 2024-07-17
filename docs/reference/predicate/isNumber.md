# isNumber

The `isNumber` function checks if a value is a `number`.

## Signature

```typescript
function isNumber(val: any): val is number
```

## Parameters

- **`val`**: `any` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a `number`, otherwise `false`.

## Examples

```typescript
import { isNumber } from 'js-utils-es/predicate';

isNumber(1); // true
isNumber(true); // false
isNumber(new Date()); // false
isNumber(() => {}); // false
```
