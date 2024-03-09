import React from 'react';
import '../Book.css';
const Book = ({ title, author }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
    </div>
  );
};

export default Book;
