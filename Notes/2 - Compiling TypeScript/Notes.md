# Compiling TypeScript

- Browsers can't understand TypeScript!
  When you write code in a TypeScript file, it doesn't get applied to the HTML file directly as browsers can't understand TypeScript.
- Compiling TypeScript to JavaScript
  But then, how will you use TypeScript? 🤔

  Well, the answer is: You've to compile TS into JS, and then, that JavaScript will work in the browser. Let's see how you can do it!

## Compiling TS into JS

- Well, compiling TS is quite easy.
- First of all, open up the terminal. (Make sure you're in the right folder!)
- Now, run this command in terminal `tsc sandbox.ts sandbox.js`
- Adding `sandbox.js` is optional, if you doesn't give it, it'll automatically generate a JS file with the same name as your TS file.
- BOOM! Done! You've successfully compiled TS into JS!! 🎊🎊

## Compiling TS in watch mode

- Now, compiling TS into JS in this way is correct, but there's a problem here!
- You've to run this command every time you make a change in your TS file! 🤯
- And it's overwhelming, isn't it?
- Here's the solution: Watch mode!
- Now, run this command in the terminal: `tsc sandbox.ts -w`
- This `-w` stands for watch mode and it compiles your sandbox file in watch mode.
- This means that TS is watching your file, and will automatically re-compile it whenever you'll make a change!
- Cool, right? 😎
