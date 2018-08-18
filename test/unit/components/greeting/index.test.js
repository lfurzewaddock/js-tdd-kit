import test from "tape";
import isNodeEnvironment from "../../../utils";
import * as greeting from "../../../../src/components/greeting";

const before = test;
const after = test;

function setup() {
  const isNode = isNodeEnvironment();
  var globalObj = {};
  if (isNode) {
    if (
      typeof global.jsTddKitLfurzewaddockComGithub !== "object" ||
      typeof global.jsTddKitLfurzewaddockComGithub.jsdom !== "object"
    ) {
      throw new Error("jsTddKitLfurzewaddockComGithub namespace or jsdom on namespace does not exist!");
    }
    const { JSDOM } = global.jsTddKitLfurzewaddockComGithub.jsdom;
    globalObj = new JSDOM().window;
  } else {
    globalObj = window;
  }
  const el = globalObj.document.createElement("div");
  el.setAttribute("id", "fixture1");

  const fixtures = {
    isNode,
    window: globalObj,
    document: globalObj.document,
    divElement: el,
  };

  // Create fresh fixture/objects each time setup() is called.
  return fixtures;
}

function teardown(fixtures) {
  // Dispose fixtures
  fixtures.document.body.innerHTML = "";
  // Assign reference to null for GC
  fixtures = null; // eslint-disable-line no-param-reassign
}

before("before", (assert) => {
  assert.pass("Do something before tests here");
  assert.end();
});

test("greeting", (t) => {
  t.test("greeting.default", (assert) => {
    const message = "should be a function ";
    const expected = "function";
    const actual = typeof greeting.default;

    assert.equal(actual, expected, message);

    assert.end();
  });
  t.test("greeting.getElement", (assert) => {
    const fixtures = setup();
    const el = greeting.getElement(fixtures.document);

    const message = "should return a div element";
    const expected = "DIV";
    const actual = el.nodeName;

    assert.equals(actual, expected, message);

    teardown(fixtures);
    assert.end();
  });
  t.test("greeting.getElement", (assert) => {
    const message = "should raise an error when not supplied arguments";
    const doc = "";

    assert.throws(function throwsFn() {
      greeting.getElement(doc);
    }, message);
    assert.end();
  });
  t.test("greeting.default", (assert) => {
    const fixtures = setup();
    greeting.default(fixtures.divElement, fixtures.document);

    const message = "should render a div element";
    const expected = "DIV";
    const actual = fixtures.document.getElementById("fixture1").nodeName;

    assert.equals(actual, expected, message);

    teardown(fixtures);
    assert.end();
  });
  t.test("greeting.default", (assert) => {
    const fixtures = setup();
    greeting.default(fixtures.divElement, fixtures.document);

    const message = "should render an empty div element";
    const expected = "";
    const actual = fixtures.document.getElementById("fixture1").innerHTML;

    assert.equals(actual, expected, message);

    teardown(fixtures);
    assert.end();
  });
  t.test("greeting.component", (assert) => {
    const message = "should raise an error when not supplied DOM element as first argument";
    const el = "";

    assert.throws(function throwsFn() {
      greeting.component(el, "simple string");
    }, message);
    assert.end();
  });
  t.test("greeting.default", (assert) => {
    const fixtures = setup();
    const mutateEl = greeting.component(fixtures.divElement, "simple string");

    // Add modified element to DOM
    greeting.default(mutateEl, fixtures.document);

    const message = "should contain simple string passed in.";
    const expected = "simple string";
    const actual = fixtures.document.getElementById("fixture1").innerHTML;

    assert.equals(actual, expected, message);

    teardown(fixtures);
    assert.end();
  });
  t.test("greeting.render", (assert) => {
    const message = "should raise an error when not supplied DOM document as second argument";
    const el = "";
    const doc = "";

    assert.throws(function throwsFn() {
      greeting.default(el, doc);
    }, message);
    assert.end();
  });
  t.test("greeting.generateHtml", (assert) => {
    const testString = "replace me";

    const message = "should generate string supplied including trailing single variable value";
    const expected = "My test replace me";
    const actual = greeting.generateHtml`My test ${testString}`;

    assert.equals(actual, expected, message);
    assert.end();
  });

  after("after", (assert) => {
    assert.pass("Do something after tests here");
    assert.end();
  });
});
