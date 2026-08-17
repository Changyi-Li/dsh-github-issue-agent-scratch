import test from 'node:test'
import assert from 'node:assert/strict'
import { add, double } from '../lib/math.js'

test('add returns the sum', () => {
  assert.equal(add(1, 2), 3)
})

test('double doubles', () => {
  assert.equal(double(21), 42)
})
