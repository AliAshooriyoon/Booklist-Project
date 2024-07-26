import "./Book.css";
const Book = ({ name, author, year }) => {
  return (
    <div className="book">
      <p className="bookName">{name}</p>
      <p className="bookAuthor">{author}</p>
      <p className="bookYear">{year}</p>
    </div>
  );
};
export default Book;
