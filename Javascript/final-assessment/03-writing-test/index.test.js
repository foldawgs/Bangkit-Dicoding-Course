import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

test('sum adds two numbers correctly', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(-1, -1), -2);
  assert.strictEqual(sum(0, 0), 0);
});
