# isWindow

The `isWindow` function checks if a value is a `window` object.

## Signature

```typescript
function isWindow(val: any): boolean
```

## Parameters

- **`val`**: `any` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a `window` object, otherwise `false`.

## Examples

```typescript
import { isWindow } from 'js-utils-es/predicate';

isWindow(window); // true
isWindow(true); // false
isWindow(new Date()); // false
isWindow(() => {}); // false
```
