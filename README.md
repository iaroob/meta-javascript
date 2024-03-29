# Programming with JavaScript
This repository contains the notes I've taken following the "Programming with JavaScript" course, from the "Meta Front-End Developer Professional Certificate" on [Coursera](https://www.coursera.org/)

Note: this repo is not planned to have a detail explanation of JS, only the information I feel like will find useful.

## Basics
### Variables
Different ways of declaring variables:
- var: redeclarable, not block scoped, creates global property and reassignable
- let: not redeclarable, block scoped, doesn't create global property and reassignable
- const: not redeclarable, block scoped, doesn't create global property and not reassignable

##### TypeOf
The TypeOf operator checks the data types (examples in week-2 folder)

### Data types
- String: can be assigned using single ``` ' ' ```, double ``` " " ``` quotes or backticks ``` ` ` ```
- Number
- Boolean: true/false
- Null: absence of value
- Undefined: refers to a variable that has not yet been assigneda value
- BigInt: large range of numbers
- Symbol

### Operators
**Assignment operators:** used for arithmetic operations
```JS
/* 
  Addition (+)           2 + 3
  Substraction (-)       3 - 2
  Division (/)           35 / 5
  Multiplication (*)     7 * 4
  Power (**)             2 ** 3
  Modulo (%)             12 % 2
*/
```
**Comaprison operators:** compares and returns a logical value based on whether the comparison is true.
```JS
/*
  Greater than (>)      3 > 2
  Less than (<)         2 < 3
  Equal to (==)         5 == 5
  Not equal to (!=)     5 != 6
*/
```
**Logical operators:** to determine if something is true or false
```JS
/*
  AND (&&)   a > 5 && a < 10
  OR (||)    a > 5 || a < 10
  NOT (!)    !(a > 5)
*/
```
#### '==' VS '==='
The equality operator compares if two values are the same. 
Two equal signs, '==', checks only for value, not the type
```JS
1 == 2       // false
100 == "100" // true
1 != 1       // false
```
The strict equality operator, '===', checks both the value and type
```JS
100 === "100"   // false
1 !== "1"       // true
```
### Outputting information
Adding style to output in console:
```JS
console.log("Hello World"); // without any style
console.log("%cHello World", "color: blue; font-size: 40px"); // with style
```
### Template literals
Template literals are enclosed by backtick ` ` ` characters instead of double or single quotes.

**Multi-line strings**
```JS
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```
**String interpolation** (use strings and variables)
```JS
const a = "car";
console.log(`The variable "a" contains ${a}`);
```

## Arrays, Objects and Functions
### Functions
```JS
function addTwoNums(a, b) {  // parameters
  return a + b;
}

console.log(addTwoNums(5, 2));  // arguments
```
**Function parameters**: variables that we pass to the function when it's defined
**Function arguments**: values that we pass to the function when it's called

### Objects and Dot Notation
Objects can be built by using the object literal syntax, by specifying the object's properties, delimited as key-value pairs.
```JS
var user = {
  name: "Aroob",
  age: 22,
  color: "blue"
}
```
To access an individual property, the dot notation does the task as the following code shows:
```JS
console.log(user.name);
```
An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties. You can also add a new key-value pair to an existing object or modify it.
```JS
var user = {}
user.name = "Aroob";
user.age = 22;
user.color = "blue";
```
### Objects and Brackets Notation
Instead of using 'dots', brackets can do the same thing as well.
```JS
var user = {}
user['name'] = "Aroob";
user['age'] = 22;
user['color'] = "blue";
```
**Note**: Using the brackets notation, it's essential to wrap each property's key as a string, inside either the single or double quotes - just like with regular strings. 

### Arrays - Objects
In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.
The most used ones are:
- push(): add new items to an array
- pop(): remove the last item from an array

```JS
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

const fruits = arrayBuilder('apple', 'orange', 'pear');
```
### Strings - methods
Strings have similar behavior to arrays. Some common String methods are:
- charAt(): read each individual character at a specific index in a string
- concat(): joins two strings
- indexOf(): returns the location of the first position that matches a character
- lastIndexOf(): finds the last match
- split(): chops up the string into an array of sub-strings
- toUpperCase(), toLowerCase()

### Methods inside Objects
Object properties can take many data types, including functions. If the function is a property of an object, it is then referred to as a **method**.
```JS
var car = {};
car.color = "red";
car.turnTheKey = function() {
    console.log("The engine is running");
}

car.turnTheKey();   // The engine is running
```

## Error Handling
### try - catch
If a piece of code throws an error, it can get wrapped inside a try block. Then you can catch the error with the catch block, and use it to do something. For example, output the error message to the console.

### throw keyword
Using the throw keyword, you can force an error to be thrown from the try block to the catch block.

```JS
try {
  throw new Error();
  
} catch(err) {
  console.log(err);
}
```

Most common errors:
- **ReferenceError**: gets thrown when, for example, one tries to use variables that haven't been declared anywhere.
- **SyntaxError**: Any kind of invalid JavaScript code will cause this error and it cannot be caught using the try-catch block.
- **TypeError**: is thrown when, for example, trying to run a method on a non-supported data type.
- **RangeError**: is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

### Undefined, null and empty values
- **Null**: represents intentional absence of object value or the return value of some built-in JS methods.
- **Undefined**: when a variable is declared without assignment, when trying to access an object property that doesn't exist.
- **Empty strings**: string without any characters inside.

### Defensive programming
Defensive programming means assuming that all the arguments a function will receive are of the wrong type, the wrong value or both.

It's about thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs.

## Functional Programming
It has clear distinction between data and functions. Data can exist outside of functions (passing data in form of arguments). The next example shows how functional programming works:

```JS
var shoes = 100;
var stateTax = 1.1; 
function totalPrice(price, tax) {
  return price * tax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);
```

### Global scope VS Local scope
The code that exists outside of a function is referred to as global scope, and all the code inside of a function is known as local scope or function scope. 

```JS
var num1 = 100; // Global scope
function score() {
  var num2 = 20;  // Local scope
}
```
## Object-Oriented Programming (OOP)
OOP revolves around the idea of organizing our programs using objects to group related data and functionality.
With the OOP approach, you create an object and store all data related to that object including variables, functions and output statements.

```JS
var purchase 1 = {      // creating an object
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = this.shoes * this.stateTax;
    console.log('Total price: ', calculation);
  }
}

purchase1.totalPrice();     // invoke method
```
### Classes
Classes are essentially a blueprint that you can repeatedly use to build new objects of a certain kind.

```JS
Class purchase {
  constructor(shoes, stateTax) {
    this.shoes = shoes;
    this.stateTax = stateTax;
  }
  
  totalPrice() {
    var calculation = this.shoes * this.stateTax;
    console.log('Total price: ', calculation);
  }
}

const purchase1 = new Purchase(100, 1.2);   // creating instance of class
purchase1.totalPrice();                     // invoke method
```
### OOP Principles: Inheritance
It is used for creating sub-classes of a base class and it gives them properties of this base class (known as super-class).

```JS
Class Animal {/* ..... */}
Class Bird extends Animal {/* ..... */}
Class Eagle extends Bird {/* ..... */}
```
### OOP Principles: Encapsulation
Encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

```JS
"abc".toUpperCase();    // for example, I don't have to worry about how this method works, I just want to use it in my code
```

### OOP Principles: Abstraction
Abstraction is all about writing code in a way that will make it more generalized. An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

### OOP Principles: Polymorphism
It means giving the same name of the method to different objects/classes, based on what object it is used for.

```JS
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle); // Ring, ring! Watch out, please!
```

## Advanced JavaScript features
### For of loops and objects
Important: for of loop cannot work on an object directly, since an object is not iterable. Arrays are iterable.

There are built-in methods that create arrays to loop over objects: **Object.keys()**, **Object.values()** and **Object.entries()**.
## JavaScript in the Browser
### DOM Manipulation
DOM (Document Object Model) manipulation involves interacting with the HTML elements and modifying their properties, content, structure, or appearance dynamically using JavaScript.
#### Selecting elements: 
- getElementById()
- querySelector()
- getElementsByClassName()
- getElementByTagName()
#### Modifying Content:
- innerHTML
- textContent
- innerText
- createTextNode()
#### Modifying attributes and properties:
- getAttribute()
- setAttribute()
- classList
- style
#### Creating and appending elements:
- createElement()
- appendChild()
- insertBefore()
#### Event handling:
- addEventListener()
- removeEventListener()

## Testing
```JS
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -5 + 7 to equal 2', () => {
  expect(sum(-5, 7)).toBe(2);
});
```
