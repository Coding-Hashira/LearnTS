// Arrays
let skills = ["HTML", "CSS", "JS"];

// Gives Error:
// skills.push(true);
// skills.push(0);

// Works:
skills.push("TS");

let jashan = ["Coder", "Teenager", 1];

// Work:
jashan.push("Hashira");
jashan.push(5);
jashan[0] = 18;

// Gives Error:
// jashan.push(true);

// Also gives error
// jashan = "Programmer";

// Objects
let person = {
  name: "Jashan",
  age: 14,
  isHashira: true,
};

// Work:
person.name = "Jashan Mago";
person.age = 15;
person.isHashira = false;

// Give Errors:
// person.name = false;
// person.age = "Teen";
// person.isHashira = "Of course!!";
// person.skills = skills;
person = {
  name: "Jashan",
  age: 14,
  isHashira: true,
};
