testCase("String trim test", {
  "test trim should remove forward whitespace":
  function () {
    assert("should remove forward whitespace", "a string" === "    a string".trim());
  },

  "test trim should remove backward whitespace":
  function () {
    assert("should remove backward whitespace", "a string" === "a string   ".trim());
  }
})
