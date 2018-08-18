import test from "tape";

import { cube, square } from "../../../src/modules/math";

test("math", (t) => {
  t.test("cube", (assert) => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof cube;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("cube", (assert) => {
    const message = "should return single supplied argument cubed: 1";
    const expected = 1;
    const actual = cube(1);

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("cube", (assert) => {
    const message = "should return single supplied argument cubed: 2";
    const expected = 8;
    const actual = cube(2);

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("square", (assert) => {
    const message = "should be a function";
    const expected = "function";
    const actual = typeof square;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("square", (assert) => {
    const message = "should return single supplied argument squared: 1";
    const expected = 1;
    const actual = square(1);

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("square", (assert) => {
    const message = "should return single supplied argument squared: 2";
    const expected = 4;
    const actual = square(2);

    assert.equal(actual, expected, message);
    assert.end();
  });
});
