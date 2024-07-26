import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import AddBook from "./Components/addBook/AddBook";
const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <AddBook></AddBook>
    </React.Fragment>
  );
};
export default App;
