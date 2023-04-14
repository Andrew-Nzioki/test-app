import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://m.media-amazon.com/images/I/41UG6tNeHBL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

const newBooks=books.map(book=>{
    return <>
    
    </>
})
const BookList = () => {
  return (
    <section className="booklist">
   {newNames}
    </section>
  );
};

const names=['john','peter','susan']
const newNames=names.map(name=>{
    return <h4>{name}</h4>
})
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4> {author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

//Main app component
function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
