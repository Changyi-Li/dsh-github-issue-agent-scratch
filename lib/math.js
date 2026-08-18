/**
 * Small math helpers used by the acceptance fixtures.
 */

/** Add two numbers. */
export function add(a, b) {
  return a + b
}

/** Double a number. */
export function double(n) {
  return n * 2
}

/** Divide a by b. Returns null when b is zero. */
export function divide(a, b) {
  if (b === 0) return null
  return a / b
}

/** Multiply two numbers. */
export function multiply(a, b) {
  return a * b
}
