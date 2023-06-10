 /* Arrays */
 /* for-each method */
 const veggies = ['onion', 'garlic', 'potato'];
 veggies.forEach( function(veggie, index) {
     console.log(`${index}. ${fruit}`);
 });

 /* filter method */
 const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

/* map method */
[0,10,20,30,40,50].map( function(num) {
  return num / 10
})

/* Maps */
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.get(1); // 'The Champion'

/* Sets */
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple']; // unique values
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
