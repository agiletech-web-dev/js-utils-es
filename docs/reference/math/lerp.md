# lerp

Linearly interpolates between `min` and `max` based on `t`

## Signature

```typescript
function lerp(min: number, max: number, t: number): number
```

### Parameters

- `min` (`number`): The minimum value
- `max` (`number`): The minimum value
- `t` (`number`): The interpolation value clamped between 0 and 1

### Returns

(`number`): The interpolated value

## Examples

```typescript
const value = lerp(0, 2, 0.5) // value will be 1
```
