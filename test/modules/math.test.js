import test from "tape";

import { cube } from "../../src/modules/math";

test("math", (t) => {
  const message = "should be a function";
  const expected = "function";
  const actual = typeof cube;

  t.equal(actual, expected, message);
  t.end();
});
