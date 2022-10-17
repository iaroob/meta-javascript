// var test = typeof('name'); // string
// var test = typeof(10); // number
// var test = typeof(3.14);  // number
// var test = typeof(false);  // boolean
// var test = typeof(1 < 2);  // boolean
// var test = typeof([1, 2, 3]); // object
// var test = typeof({property: 1}); // object
var test = typeof(function hello() {console.log("hello"); });   // function

console.log(test);