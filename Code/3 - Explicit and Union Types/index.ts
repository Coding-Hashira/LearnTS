// Explicit Types
let programming: string;
let age: number;
let hasAccount: boolean;

// Give Error:
// programming = true;
// age = "teen"
// hasAccount = "Nope!"

// Work:
programming = "Fun!";
age = 14;
hasAccount = true;

let ids: number[];
let names: string[];
let answers: boolean[];

// Give Error:
// ids = [3, 4, 6, "8"]
// names = ["Jashan", false];
// answers = [true, false, "Wrong"];

// Work:
ids = [3, 4, 5];
names = ["Jashan", "Virat", "Karthik"];
answers = [true, false, false, true];

// Union Types
let mixed: (string | number)[] = [];

// Works:
mixed = ["hello", "hey", "Yo!", 0, 9];

// Gives Error:
// mixed = ["hi", "hello", 6, 9, false];

let id: string | number;
let answer: string | boolean | number;

// Work:
id = "125";
id = 123;
answer = false;
answer = "Correct!";

// Gives Error:
// id = false;

let personOne: object;
personOne = { username: "Coding Hashira", age: 14, isAdult: false };

let personTwo: { username: string; age: number; isAdult: boolean };
