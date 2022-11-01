var person = "Jashan";
var age = 14;
var isHashira = true;
// Gives Error:
// person = false;
// age = "teen";
// isHashira = "Of Course!"
// Works:
person = "BetterJS";
age = 19;
isHashira = false; // This isn't true ;)
var circ1 = function (diameter) {
  return diameter * Math.PI;
};
var circ2 = function (diameter) {
  return diameter * Math.PI;
};
// Work:
console.log(circ1(2));
console.log(circ2(2));
// This will not show error in compilation, but will show error in execution:
console.log(circ1("2cm"));
// Shows Error:
// console.log(circ2("2cm"));
