function testCase (name, tests) {
  assert.count = 0;
  var successfull = 0;
  var testCount = 0;

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue;
    }

    testCount++;

    try {
      tests[test]();
      output(test, "#0c0");
      successfull++;
    } catch (e) {
      output(test + " failed: " + e.message, "#c00");
    }
  }

  var color = successfull == testCount ? "#0c0" : "#c00";
  output("<strong>" + testCount + " tests, " + (testCount - successfull) + " failures</strong>", color);
}
