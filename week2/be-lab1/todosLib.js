let todoArray = [];
let nextId = 1;

// Add an Element
function addOne(task, completed, dueDate) {
  // Check if any paramater is empty or undefined
  if (!task || !true || !dueDate) {
    return false;
  }

  const newTodo = {
    id: nextId++,
    task,
    completed,
    dueDate,
  };

  todoArray.push(newTodo);
  return newTodo;
}

// Get All Elements
function getAll() {
  return todoArray;
}

// Find an Elememt by ID
function findById(id) {
  const numericId = Number(id); //Converts the ID to a number
  const toDo = todoArray.find((item) => item.id === numericId);
  return toDo || false; // Return false if not found
}

// update an Element by ID
function updateOneById(id, updatedData) {
  const toDo = findById(id);
  if (toDo) {
    // Update properties only if they are provided in updatedData
    if (updatedData.task) toDo.task = updatedData.task;
    if (updatedData.completed) toDo.completed = updatedData.completed;
    if (updatedData.dueDate) toDo.dueDate = updatedData.dueDate;
    return toDo; // Returns the updated toDo object
  }
  return false; // Returns false if not found
}

// delete an Element by ID
function deleteOneById(id) {
  const toDo = findById(id);
  if (toDo) {
    const initialLength = todoArray.length;
    todoArray = todoArray.filter((toDo) => toDo.id !== Number(id)); // Filter out toDo with the matching ID
    return todoArray.length < initialLength; // Return true if delete succeed
  }
  return false; // Return false if not found
}

// Testing
if (require.main === module) {
  // addOne
  let result = addOne("Buy groceries", false, "2024-08-30");
  console.log(result);
  result = addOne("123123", false, "2024-09-30");
  console.log(result);

  // getAll
  console.log("Get all elements", getAll());

  // findById
  console.log("Find by id", findById(1));

  // updateOneById
  console.log(
    "updateOneById",
    updateOneById(1, { task: "23223", completed: true })
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
