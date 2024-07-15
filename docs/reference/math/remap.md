# remap

Linearly remaps a clamped value from its source range [`inMin`, `inMax`] to the destination range [`outMin`, `outMax`]

## Signature

```typescript
function remap(n: number, inMin: number, inMax: number, outMin: number, outMax: number): number
```

### Parameters

- `n` (`number`): The value to remap
- `inMin` (`number`): The minimum value of the source range
- `inMax` (`number`): The maximum value of the source range
- `outMin` (`number`): The minimum value of the destination range
- `outMax` (`number`): The maximum value of the destination range

### Returns

(`number`): The remapped value

## Examples

```typescript
const value = remap(0.5, 0, 1, 200, 400) // value will be 300
```
