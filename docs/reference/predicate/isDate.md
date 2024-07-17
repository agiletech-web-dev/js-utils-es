# isDate

The `isDate` function checks if a value is a `Date` object.

## Signature

```typescript
function isDate(val: any): val is Date
```

## Parameters

- **`val`**: `unknown` - The value to check.

## Returns

- **`boolean`** - Returns `true` if the value is a `Date`, otherwise `false`.

## Examples

```typescript
import { isDate } from 'js-utils-es/predicate';

isDate(1); // false
isDate(true); // false
isDate(new Date()); // true
```
