/**
 * String helpers used by the acceptance fixtures.
 */

/** Capitalize one word (first letter upper, the rest lower). */
export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
