import "./AddBook.css";
import Book from "./../Book/Book";
import React, { useState } from "react";

const AddBook = () => {
  const [bookName, setBookName] = useState(null);
  const [bookAuthor, setBookAuthor] = useState(null);
  const [bookYear, setBookYear] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [allBooks, setAllBooks] = useState([
    // { bookName: "Ali", bookAuthor: "Ash", bookYear: "x" },
  ]);
  let [num, setNum] = useState(1);
  const addBookBtn = () => {
    console.log("Hi from BTN");
    setShowResult(true);
    allBooks.push({
      bookName: bookName,
      bookAuthor: bookAuthor,
      bookYear: bookYear,
      id: num,
    });
    setNum(num + 1);
    console.log(allBooks);
  };
  return (
    <div className={`addBook`}>
      {/*<Book />*/}
      <label htmlFor="bookTitle">
        Book Title
        <input
          type="text"
          name="title"
          id="bookTitle"
          onChange={(e) => setBookName(e.target.value)}
          // value={}
        />
      </label>
      <label htmlFor="bookAuthor">
        Book Author
        <input
          type="text"
          name="author"
          id="bookAuthor"
          onChange={(e) => setBookAuthor(e.target.value)}
        />
      </label>
      <label htmlFor="bookYear">
        Book Year
        <input
          type="text"
          name="year"
          id="bookYear"
          onChange={(e) => setBookYear(e.target.value)}
        />
      </label>
      <button className="addBookBtn" onClick={addBookBtn}>
        Add Book
      </button>
      <div className="showResult">
        <div className="spacer"></div>
        <div className="showResultTitle">
          <p>Title</p>
          <p>Author</p>
          <p>Year</p>
        </div>
        <div className="spacer"></div>
        {allBooks.map((i) => (
          <Book
            name={i.bookName}
            author={i.bookAuthor}
            year={i.bookYear}
            key={i.id}
          />
        ))}
      </div>
    </div>
  );
};
export default AddBook;
