// Object Destructing
const person = { name0: "Alice", age: 30, city: "New York" };

const { name0, age } = person;

console.log("Name:", name0);
console.log("Age", age);

// Extracting Nested Properties
const person1 = { name1: "Alice", info: { age: 30, occupation: "Engineer" } };

const {
  name1,
  info: { age1, occupation },
} = person1;

console.log("Name:", name1);
console.log("Age", age);
console.log("Occupation:", occupation);

// Extracting Function Parameters from an Object
const greetUser = ({ name, age }) => {
  console.log(`Hello, ${name}! You're ${age} years old.`);
};

greetUser({ name: "Bob", age: 25 });
