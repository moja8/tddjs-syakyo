function testCase (name, tests) {
  assert.count = 0;
  var successfull = 0;
  var testCount = 0;
  var hasSetup = typeof tests.setUp == "function";
  var hasTeardown = typeof tests.tearDown == "function";

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue;
    }

    testCount++;

    try {
      if (hasSetup) {
        tests.setUp();
      }

      tests[test]();
      output(test, "#0c0");

      if (hasTeardown) {
        tests.tearDown();
      }

      successfull++;
    } catch (e) {
      output(test + " failed: " + e.message, "#c00");
    }
  }

  var color = successfull == testCount ? "#0c0" : "#c00";
  output("<strong>" + testCount + " tests, " + (testCount - successfull) + " failures</strong>", color);
}
