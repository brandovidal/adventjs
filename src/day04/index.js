/**
 * It creates an array of numbers, then uses that array to create an array of lines, then joins those
 * lines with newlines
 * @param {number} height - the height of the tree
 * @returns a string with the tree.
 */
export default function createXmasTree (height) {
  // ¡Y no olvides también poner los turrones!

  const SNOWBALL = '*'
  const EMPTY = '_'
  const DECORATOR = '#'

  const formule = (n) => n + (n - 1)

  const generateArray = (_, index) => formule(index + 1)

  const createLine = (digits, line) => {
    const lastNDigits = line.slice(digits)
    const extractLine = lastNDigits.padEnd(line.length, EMPTY)

    const startNDigits = extractLine.slice(digits)
    return startNDigits.padStart(extractLine.length, EMPTY)
  }

  const createTree = (n, max) => {
    const digits = (max - n) / 2
    const line = SNOWBALL.repeat(max)
    return createLine(digits, line)
  }

  const createDecorator = (max) => {
    const digits = (max - 1) / 2
    const line = DECORATOR.repeat(max)
    return createLine(digits, line)
  }

  // define numbers and max line
  const numbers = Array.from({ length: height }, generateArray)
  const max = formule(numbers.length)

  // create line decorator
  const decorator = createDecorator(max)

  // create lines of tree
  const lines = numbers.map(n => createTree(n, max))

  // create tree
  const tree = [...lines, decorator, decorator]
  return tree.join('\n')
}
