# Arrays and Objects

> **Note-:** Please refer to [Arrays and Objects Code Folder](../../Code/2%20-%20Arrays%20and%20Objects/) with these notes. I'll repeatedly refer to code written there, so it'll be great for your understanding 😉

In the [previous section](../3%20-%20Type%20Basics), we explored one of the best features of TypeScript - Static typing. Previously, we focused more on primitive data types, such as strings, numbers, and boolean.

In this section, let's take a look at two more data types - Arrays and Objects!

The same rules of static typing apply to arrays and objects, too! (Once declared an Array/Object, a variable then can't be changed into any other type)

But there are some twists!

## Arrays

Let's assume you declared an array where all its elements are of one type, say string, as we've done in `line 2` of [index.js](../../Code/2%20-%20Arrays%20and%20Objects/index.ts).

Now, if you'll try to add elements of any type other than string, it'll give you an error! But you can add more strings to the array, that's absolutely fine!

It basically means that if during the initial declaration, an element of a specific type is not present in the array, you can't add elements of that specific type in the array later on.

Of course, you can define a mixed array, an array with more than one type of element, and it'll work without any problem!
Example: Refer to `lines 11-19`

Also, assume that you declared a mixed array of numbers and strings, with the element at index 0 as a string. Now, in this case, you can change that specific value to even a number!

## Objects

In an object, each property works like an individual variable in TS. It means that if you've declared a property in an object to be a string, then you can't change its type later on.

Also, you can neither add additional properties to an object nor remove the original ones.

Now, remember that it's not a bad thing, it's a good thing as it'll help us reduce the errors in our project!
