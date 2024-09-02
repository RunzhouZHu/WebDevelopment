import "./App.css";
import Book from "./Book";
import bookData from "./bookData";
import "./Book.css";

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {bookData.map((book) => (
          <Book key={book.id} book={book} name="sami" />
        ))}
      </div>
    </div>
  );
}

export default App;
