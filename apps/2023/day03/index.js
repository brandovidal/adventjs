/**
 * @param {string} original
 * @param {string} modified
 */
export default function findNaughtyStep (original, modified) {
  if (original === modified) return ''

  let larger = [...original]
  let shorter = [...modified]

  if (original.length < modified.length) {
    larger = [...modified]
    shorter = [...original]
  }

  return larger.find((char, index) => char !== shorter[index]) || ''
}
