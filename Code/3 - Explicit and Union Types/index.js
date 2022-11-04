// Explicit Types
var programming;
var age;
var hasAccount;
// Give Error:
// programming = true;
// age = "teen"
// hasAccount = "Nope!"
// Work:
programming = "Fun!";
age = 14;
hasAccount = true;
var ids;
var names;
var answers;
// Give Error:
// ids = [3, 4, 6, "8"]
// names = ["Jashan", false];
// answers = [true, false, "Wrong"];
// Work:
ids = [3, 4, 5];
names = ["Jashan", "Virat", "Karthik"];
answers = [true, false, false, true];
// Union Types
var mixed = [];
// Works:
mixed = ["hello", "hey", "Yo!", 0, 9];
// Gives Error:
// mixed = ["hi", "hello", 6, 9, false];
var id;
var answer;
// Work:
id = "125";
id = 123;
answer = false;
answer = "Correct!";
// Gives Error:
// id = false;
var personOne;
personOne = { username: "Coding Hashira", age: 14, isAdult: false };
var personTwo;
