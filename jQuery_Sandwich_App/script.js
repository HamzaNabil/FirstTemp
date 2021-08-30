$(document).ready(function () {
  // Create Variable for Each Sandwich
  var firstSand = 0;
  var secondSand = 0;
  var thirdSand = 0;

  $("#firstSandwich").click(function () {
    firstSand++;
    alert(" You ate " + firstSand + " sandwiches");
  });
  $("#secondSandwich").click(function () {
    secondSand++;
    alert(" You ate " + secondSand + " sandwiches");
  });
  $("#thirdSandwich").click(function () {
    thirdSand++;
    alert(" You ate " + thirdSand + " sandwiches");
  });
});
