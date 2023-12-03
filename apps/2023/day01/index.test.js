import { describe, expect, test } from 'vitest'

import findFirstRepeated from './index.js'

const cases = [
  {
    title: 'Should return the first repeated number',
    collection: [2, 1, 3, 5, 3, 2],
    expected: 3
  },
  {
    title: 'Should return -1, there is no repeated number',
    collection: [1, 2, 3, 4],
    expected: -1
  },
  {
    title: 'Should return -1, list number is empty',
    collection: [],
    expected: -1
  }
]

describe('Day 01 - AdventJS', () => {
  test.each(cases)('$title', ({ collection, expected }) => {
    expect(findFirstRepeated(collection)).toEqual(expected)
  })
})
