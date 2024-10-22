# capitalize

Converts the first character of string to upper case and the remaining to lower case.

## Signature

```typescript
function capitalize<T extends string>(str: T): Capitalize<T>;
```

### Parameters

`str` (`T`): The string to be converted to uppercase.

### Returns

(`Capitalize<string>`): The capitalized string.

## Examples

```typescript twoslash
import { capitalize } from 'js-utils-es/string';

capitalize('fred'); // returns 'Fred'
capitalize('FRED'); // returns 'Fred'
```
