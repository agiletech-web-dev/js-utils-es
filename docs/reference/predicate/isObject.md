# isObject

The `isObject` function checks if a value is a plain object.

## Signature

```typescript
function isObject(val: any): val is object
```

## Parameters

- **`val`**: `any` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a plain object, otherwise `false`.

## Examples

```typescript
import { isObject } from 'js-utils-es/predicate';

isObject({}); // true

isObject(1); // false
isObject(true); // false
isObject(new Date()); // false
isObject(() => {}); // false
```
