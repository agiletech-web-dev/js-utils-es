# isBoolean

The `isBoolean` function checks if a value is a boolean.

## Signature

```typescript
function isBoolean(val: any): val is boolean
```

## Parameters

- **`val`**: `unknown` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is boolean, otherwise `false`.

## Examples

```typescript
import { isBoolean } from 'js-utils-es/predicate';

isBoolean(1); // false
isBoolean(true); // true
```
