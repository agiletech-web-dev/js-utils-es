# isUndefined

Checks if the given value is `undefined`.

This function tests whether the provided value is strictly equal to `undefined`.
It returns `true` if the value is `undefined`, and `false` otherwise.

This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `undefined`.

## Signature

```typescript
function isUndefined(val: any): val is undefined
```

### Parameters

- `x` (`any`): The value to test if it is `undefined`.

### Returns

(`x is undefined`): `true` if the value is `undefined`, `false` otherwise.

## Examples

```typescript twoslash
import { isUndefined } from 'js-utils-es/predicate';

const value1 = undefined;
const value2 = null;
const value3 = 42;

console.log(isUndefined(value1)); // true
console.log(isUndefined(value2)); // false
console.log(isUndefined(value3)); // false
```
