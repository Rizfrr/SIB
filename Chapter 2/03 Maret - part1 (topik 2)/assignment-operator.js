/* 
Declare x variable
 */
let x = 10;

// additional assignment operator
x += 5; //x=x+5 => x=10+5=15

console.log("x : ", x);

// object
let person = { name: "Reza", age: 24, job: "student" };
// array
let fruits = ["manggo", "banana", "apple"];

// assigment
person.name = "Alfareza";
console.log("person : ", person);

fruits[0] = "orange";
console.log("fruits : ", fruits);

// destructuring assigment
let { name, job } = person;
let [firstFruit, secondFruit] = fruits;
console.log("name :", name); //name : 'Alfarezaa'
console.log("job : ", job); //job : 'sudent'
console.log("First Fruit : ", firstFruit);
