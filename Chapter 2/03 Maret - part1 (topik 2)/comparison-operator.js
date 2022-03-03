const a = 10;
const b = 100;

const isABiggerThanB = a > b;
console.log(isABiggerThanB); //false

//equal
const isAEqualToB = a == b;
console.log(isAEqualToB); //false

//not equal
const isANotEqualToB = a != b;
console.log(isANotEqualToB); //true

//strict equal
// nilai dan type harus sama
const isAStrictEqualToB = a === b;
console.log(isAStrictEqualToB); //false
