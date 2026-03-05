import sum from './sum.js';

describe("test for su fnx", () => {
  test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  });
  test('adds -1 + -2 to equal -3', () => {
  expect(sum(-1, -2)).toBe(-3);
  });
})