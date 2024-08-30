let carArray = [];
let nextId = 1;

// Add an Element
function addOne(model, color, age) {
  // Check if any paramater is empty or undefined
  if (!model || !color || !age) {
    return false;
  }

  const newCar = {
    id: nextId++, // Assigns a unique id and increments it
    model,
    color,
    age,
  };

  carArray.push(newCar); // Adds the new car to the array
  return newCar; // Returns the added car object
}

// Read All Elements
function getAll() {
  return carArray;
}

// Read an Element by ID
function findById(id) {
  const numericId = Number(id); // Converts the ID to a number
  const car = carArray.find((item) => item.id === numericId); // Finds the car with the matching ID
  return car || false; // Returns the car or false if not found
}

// Update an Element by ID
function updateOneById(id, updatedData) {
  const car = findById(id);
  if (car) {
    // Update properties only if they are provided in updatedData
    if (updatedData.model) car.model = updatedData.model;
    if (updatedData.color) car.color = updatedData.color;
    if (updatedData.age) car.age = updatedData.age;
    return car; // Returns the updated car object
  }
  return false; //Returns false if the car with the provided ID is not found
}

// Delect an Element by ID
function delectOneById(id) {
  const car = findById(id);
  if (car) {
    const initialLength = carArray.length;
    carArray = carArray.filter((car) => car.id !== Number(id)); // Filters our the car with the matching ID
    return carArray.length < initialLength; // Returns true if the array length decreased, indicating successful delecion
  }
  return false; // Return false if the car was not found
}

// Testing the Module
if (require.main === module) {
  // Add cars
  let result = addOne("Corola", "Red", 3);
  console.log(result);
  result = addOne("Civic", "Blue", 2);
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "updateOneById called:",
    updateOneById(1, { age: 4, color: "Black" })
  );
  console.log("findById called after item updated:", findById(1));

  console.log("delectOneById called:", delectOneById(1));
  console.log("findById called after item delected:", findById(1));
}

// Exporting the Module
const Car = {
  getAll,
  addOne,
  findById,
  updateOneById,
  delectOneById,
};

module.exports = Car;
