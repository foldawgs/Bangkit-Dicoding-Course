import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum with positive numbers", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("sum with zero", () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 5), 5);
});

test("sum with negative numbers", () => {
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(1, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test("sum with non-number inputs", () => {
  assert.strictEqual(sum("a", 2), 0);
  assert.strictEqual(sum(2, "b"), 0);
  assert.strictEqual(sum("a", "b"), 0);
  assert.strictEqual(sum(undefined, 2), 0);
  assert.strictEqual(sum(2, null), 0);
});
