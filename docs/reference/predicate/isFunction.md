# isFunction

The `isFunction` function checks if a value is a `Function` object.

## Signature

```typescript
function isFunction(val: any)
```

## Parameters

- **`val`**: `any` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a `Function`, otherwise `false`.

## Examples

```typescript
import { isFunction } from 'js-utils-es/predicate';

isFunction(1); // false
isFunction(true); // false
isFunction(new Date()); // false
isFunction(() => {}); // true
```
