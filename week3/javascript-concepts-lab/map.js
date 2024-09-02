// Understanding the map() Method
const numbers = [2, 4, 6, 8, 10];

const doubleNumbers = numbers.map((num) => num * 2);

console.log("Original Numbers:", numbers);
console.log("Double Numbers:", doubleNumbers);

// Converting Temperatures to Kelvin
const TemperaturesCelsius = [0, 15, 30, 45];

const TemperaturesKelvin = TemperaturesCelsius.map(
  (celsius) => celsius + 273.15
);

console.log("Celsius Temperature:", TemperaturesCelsius);
console.log("Kelvin Temperatures:", TemperaturesKelvin);

// Capitalizing Names
const names = ["alice", "bob", "carol"];

const capitalizedNames = names.map((name) => name.charAt(0).toUpperCase());

console.log("Original Names:", names);
console.log("Capitalized Names:", capitalizedNames);
