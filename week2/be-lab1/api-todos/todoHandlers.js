const { json } = require("express");
const ToDo = require("./todosLib");
const { updateCar } = require("../api-cars/carHandlers");

// Get All Todos
const getAllTodos = (req, res) => {
  res.json(ToDo.getAll());
};

// Create todo
const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTodo = ToDo.addOne(task, completed, dueDate);
  if (newTodo) {
    res.json(newTodo);
  } else {
    res.status(500).json({ message: "Failed to create new todo" });
  }
};

// Get todo by ID
const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = ToDo.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Update todo
const updateTodo = (req, res) => {
  const todoId = req.params.todoId;

  const { task, completed, dueDate } = req.body;

  const updateTodo = ToDo.updateOneById(todoId, { task, completed, dueDate });

  if (updateTodo) {
    res.json(updateTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Delect todo
const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;

  const isDeleted = ToDo.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
