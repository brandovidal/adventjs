/**
 * @param {number[]} gifts
 */
export default function findFirstRepeated (gifts) {
  const seen = new Set()

  for (const id of gifts) {
    if (seen.has(id)) return id
    seen.add(id)
  }
  return -1
}
