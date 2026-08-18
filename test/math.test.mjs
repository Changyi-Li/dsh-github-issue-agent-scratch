import test from 'node:test'
import assert from 'node:assert/strict'
import { add, divide, double } from '../lib/math.js'

test('add returns the sum', () => {
  assert.equal(add(1, 2), 3)
})

test('double doubles', () => {
  assert.equal(double(21), 42)
})

test('divide returns the quotient', () => {
  assert.equal(divide(10, 2), 5)
})

test('divide by zero returns null', () => {
  assert.equal(divide(10, 0), null)
})
