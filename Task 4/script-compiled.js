"use strict";

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var average = function average() {
  return grades.reduce(function (a, b) {
    return a + b;
  }) / grades.length;
};

console.log(average());
