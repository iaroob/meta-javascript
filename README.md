# Programming with JavaScript
This repository contains the notes I've taken following the "Programming with JavaScript" course, from the "Meta Front-End Developer Professional Certificate" on [Coursera](https://www.coursera.org/)

Note: this repo is not planned to have a detail explanation of JS, only the information I feel like will find useful.

## Basics
### Variables
Different ways of declaring variables:
- var: redeclarable, not block scoped, creates global property and reassignable
- let: not redeclarable, block scoped, doesn't create global property and reassignable
- const: not redeclarable, block scoped, doesn't create global property and not reassignable

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

## Conditionals and Loops
## Arrays, Objects and Functions
## Error Handling
## Functional Programming
## Object-Oriented Programming (OOP)
## Advanced JavaScript features
## JavaScript in the Browser
## Node.js and NPM
## Testing
