# Explicit and Union Types

> **Note-:** Please refer to [Explicit and Union Types Code Folder](../../Code/3%20-%20Explicit%20and%20Union%20Types/) with these notes. I'll repeatedly refer to code written there, so it'll be great for your

## Explicit Types

As of now, whenever we write our variables and give them a value, TypeScript automatically infers the type of the variable based on its value.

But, there can be times when we just want to initialize a variable without giving it a value, and in that case, TS can't infer its type, and it'll allow us to give the variable a value of any type, and that's not what we expect from TS!

So, how can we solve it?

Now, we can solve it by explicitly giving the variable a type, as we've done in `line 1`.

In this case, we can't now give the variable a value of any type, it has to be a string.

We can do the same for other types, too!

But the case of arrays is a little bit more complicated. Let's see what exactly it's!

Let's assume you have an array, `ids`, and you want to just allow numbers in it. Now, for that, you can check out `lines 16-18`, where we have created 3 types, each allowing only a single type.

Also, it's better to initialize the array with this syntax: `let arr: string[] = []` than with this one: `let arr: string[]`. In the first case, an array is initialized, and you're allowed to use all the array functions and methods on it. While in the second case, you're saying that it should be a string in the future, but it's NOT a string as of now!

## Union Types

Now, what if you want to create a mixed array with multiple types?

Well, here comes union types! Let's see what are union types!

Union types are our way to say it could be one of two or one of three types.
Example: `line 31`

We can also use union types on normal variables.
Example: `lines 39-40`

Lastly, let's take a look at how explicit types works in objects!

Just like other types, we can also explicitly define a variable as an object, as we've done in `line 51`.

In objects, we can also create a kind of type template, telling what type each property should be without actually initializing an actual object!
Example: `line 54`
