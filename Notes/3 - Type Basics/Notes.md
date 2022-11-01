# Type Basics

> **Note-:** Please refer to [Type Basics Code Folder](../../Code/1%20-%20Type%20Basics/) with these notes. I'll repeatedly refer to code written there, so it'll be great for your understanding 😉

One of the major differences between JS and TS is that Ts uses strict types and JS doesn't.

Strict types basically mean that if we define a variable as a string, we can't change its type later on, and the same applies to other types such as number, boolean, array, etc.
For Example: Refer to [Code](../../Code/1%20-%20Type%20Basics/index.ts)

Now, if you take a look at commented code in `lines 6-8`, those lines will show an error in TS as they're trying to change the type of variables, which, in a big project, leads to more of those irritating red messages in the console!

Whereas lines `11-13` don't show any error because they're just changing the value of the variable, which is allowed, and not its type.

In TS, unlike many other languages, we don't have to specifically mention the type of variable. It uses something called Type Inference, which means that it'll automatically assign types to all the variables.

We can also declare what type of variable we expect to be passed in a function as an argument.
Example: Refer to the `circ1` and `circ2` functions in [Code](../../Code/1%20-%20Type%20Basics/index.js)](../../Code/1%20-%20Type%20Basics/index.js)

In `circ1`, anything can be passed to circ1 as a diameter argument, even a string, though it doesn't make any sense to pass `"10cm"` instead of `10`!

Whereas in `circ2`, we've defined that the diameter argument must be a number.

You can understand `circ1` as JS and `circ2` as TS. There can be type errors in `circ1` where we can pass literally anything as an argument, whereas, `circ2` allows us to only pass numbers as an argument, which simply means LESS ERRORS! :D

Also, it doesn't matter if you use an arrow function or a simple function in TS, remember, we can use all the modern JS features of JS in TS which are not fully supported yet.
