import { describe, expect, it } from 'vitest'
import { pChain } from './pChain'

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

describe('pChain', () => {
  it('chain array map', async () => {
    expect(
      await pChain([1, 2, 3, 4, 5])
        .map(async (i) => {
          await timeout(10)
          return i * i
        })
        .filter(i => i > 10)
        .reduce((a, b) => a + b, 0),
    )
      .toEqual(41)
  })
})
