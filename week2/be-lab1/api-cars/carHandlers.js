const Car = require("./carLib");

// Get All Cars
const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// Create a New Car
const createCar = (req, res) => {
  const { model, color, age } = req.body;

  const newCar = Car.addOne(model, color, age);

  if (newCar) {
    res.json(newCar);
  } else {
    res.status(500).json({ message: "Failed to create car" });
  }
};

// Get a Car by ID
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

//Update a Car by ID
const updateCar = (req, res) => {
  const carId = req.params.carId;

  const { model, color, age } = req.body;

  const updateCar = Car.updateOneById(carId, { model, color, age });

  if (updateCar) {
    res.json(updateCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

//Delect a Car by ID
const deleteCar = (req, res) => {
  const carId = req.params.carId;

  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
