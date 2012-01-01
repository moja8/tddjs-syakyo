var date = new Date(2009, 9, 2);

try {
  assert("%Y should return full year",
      date.strftime("%Y") === "2009");
  assert("%m should return month",
      date.strftime("%m") === "10");
  assert("%d should return date",
      date.strftime("%d") === "02");
  assert("%y should return year as two digits",
      date.strftime("%y") === "09");
  assert("%F should return acts as %Y-%m-%d",
      date.strftime("%F") === "2009-10-02");
  output(assert.count + " tests OK", "#0c0");
} catch (e) {
  output("Test failed: " + e.message, "#c00");
}
