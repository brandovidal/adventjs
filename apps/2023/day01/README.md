# Automating Christmas gift wrapping!

### Solution

```javascript
export default function findFirstRepeated (gifts) {
  const seen = new Set()

  for (const id of gifts) {
    if (seen.has(id)) return id
    seen.add(id)
  }
  return -1
}
```

### Test

```javascript
import findFirstRepeated from './index.js'
import { test, expect } from 'vitest'

const cases = [
  {
    title: 'find first repeated',
    collection: [2, 1, 3, 5, 3, 2],
    expected: ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******']
  },
  {
    title: 'number is not repeated',
    collection: [1, 2, 3, 4],
    expected: ['******\n*midu*\n******']
  },
  {
    title: 'return empty array',
    collection: [],
    expected: []
  }
]

describe('Day 1 - AdventJS challengue', () => {
  test.each(cases)('$title', ({ collection, expected }) => {
    expect(findFirstRepeated(collection)).toEqual(expected)
  })
})
```

### Screenshot

![Test](./test.png)

[Back to the table of challengues](/README.md)
