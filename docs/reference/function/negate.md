# negate

Creates a function that negates the result of the predicate function.

## Signature

```typescript
function negate<F extends (...args: unknown[]) => boolean>(func: F): F;
```

### Parameters

- `func` (`F extends (args: ...Parameters) => unknown`): The function to negate.

### Returns

- (`F`): Returns the new negated function.

## Examples

```typescript twoslash
import { negate } from 'js-utils-es/function';

negate(() => true)(); // returns 'false'
negate(() => false)(); // returns 'false'
```
