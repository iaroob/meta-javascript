function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i])
  }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

const fruits = arrayBuilder('apple', 'orange', 'pear');
console.log(fruits);