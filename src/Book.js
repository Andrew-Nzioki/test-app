import * as React from "react";

// your JSX code here

const Book = (props) => {
  //bring in props, props are sort of object keys
  const { img, title, author,number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button>click me</button>
      <h4> {author}</h4>
      <span className="number">{`# ${number+1}`}</span>
    </article>
  );
};

export default Book;
