let feedbackArray = [];
let nextId = 1;

//function addOne
function addOne(sender, message, rating) {
  if (!sender || !message || !rating) {
    return false;
  }

  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
}

//function getAll()
function getAll() {
  return feedbackArray;
}

//function findById(id)
function findById(id) {
  const numericId = Number(id);
  const feedback = feedbackArray.find((item) => item.id === numericId);
  if (feedback) {
    return feedback;
  } else {
    return false;
  }
}

//function updateOneById
const updateOneById = (id, updatedData) => {
  const feedback = findById(id);
  if (feedback) {
    if (feedback.sender) {
      feedback.sender = updatedData.sender;
    }
    if (feedback.message) {
      feedback.message = updatedData.message;
    }
    if (feedback.rating) {
      feedback.rating = updatedData.rating;
    }
    return feedback;
  }
  return false;
};

//function deleteOneById(id)
const deleteOneById = (id) => {
  const feedback = findById(id);
  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter(
      (feedback) => feedback.id !== Number(id)
    );
    return feedbackArray.length < initialLength;
  }
  return false;
};

// Move test code here
if (require.main === module) {
  // addOne()
  let result = addOne(
    "John Smith",
    "Great session on React components! I found the examples very helpful.",
    5
  );
  result = addOne(
    "Jane Doe",
    "The session on React components was very insightful!",
    4
  );
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called", findById(1));

  console.log(
    "updateOneById called:",
    updateOneById(1, {
      sender: "Jane Doe",
      message: "The session on React components was very insightful!",
      rating: 4,
    })
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

Feedback = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Feedback;
