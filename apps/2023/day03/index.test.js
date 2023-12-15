import { describe, expect, test } from 'vitest'
import findNaughtyStep from './index.js'

const cases = [
  {
    title: 'Should return vowel "e"',
    original: 'abcd',
    modified: 'abcde',
    expected: 'e'
  },
  {
    title: 'Should return vowel "f"',
    original: 'stepfor',
    modified: 'stepor',
    expected: 'f'
  },
  {
    title: 'Should return an empty string',
    original: 'abcde',
    modified: 'abcde',
    expected: ''
  }
]

describe('Day 02 - AdventJS', () => {
  test.each(cases)('$title', ({ original, modified, expected }) => {
    expect(findNaughtyStep(original, modified)).toEqual(expected)
  })
})
