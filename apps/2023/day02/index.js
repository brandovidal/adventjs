/**
 * @param {string[]} gifts
 * @param {string} [materials]
 */
export default function manufacture (gifts, materials) {
  const made = []

  for (const gift of gifts) {
    if (!gift.match(new RegExp(`[${materials}]+`, 'g')).includes(gift)) continue
    made.push(gift)
  }

  return made
}
