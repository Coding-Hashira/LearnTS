# TypeScript 101

## Intro to TypeScript

- Alternative to JavaScript (superset)
  It means that TS basically extends JS with new features and syntax. So, it also means that any working JS code is a valid JS code.
- Browsers can only understand JS and not TS
  This means that we've to compile our TS code into JS code in order for browser to understand it. Computer is after all nothing but a dumb peice of metal 😉
  It's not a bad thing about TS, it's quite easy to do in fact!
- Allows us to use Strict Types
  This means that if I declare a variable in TS to be a specific type, say string, then, later on I can't change it's type, to say number! It makes debugging a lil' bit easier, though it's still a headache 😒
  JS, on the contrary uses something called Dynamic types by default, where variables can change types at any point which means more errors!
- Supports Modern Features (arrow functions, let, const)
  TS supports all the modern features of JS, that might not be supported directly in the browsers. Ex -> arrow functions, let, const.
  Modern JS will compile down to old JS. Like Arrow Functions in TS->Regular Functions in compiled JS
- Extra Features (generics, interfaces, tuples)
  In addition to these features, TS also offers some completely new cool features which are not in JS.

## Prerequisites

- Arrow Functions and other modern JS features
- The DOM
- Classes
- NodeJS Installed
- An IDE
- TypeScript Installed -> '''npm i -g typescript'''
- MOST IMPORTANT -> Computer and Internet Connection 🙃
