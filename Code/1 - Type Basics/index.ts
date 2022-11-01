let person = "Jashan";
let age = 14;
let isHashira = true;

// Gives Error:
// person = false;
// age = "teen";
// isHashira = "Of Course!"

// Works:
person = "BetterJS";
age = 19;
isHashira = false; // This isn't true ;)

const circ1 = (diameter) => {
  return diameter * Math.PI;
};

const circ2 = (diameter: number) => {
  return diameter * Math.PI;
};

// Work:
console.log(circ1(2));
console.log(circ2(2));

// This will not show error in compilation, but will show error in execution:
console.log(circ1("2cm"));

// Shows Error:
// console.log(circ2("2cm"));
