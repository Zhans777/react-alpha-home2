import React from 'react';
import Book from './Book';
import '../Booklist.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Books:</h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <Book title={book.title} author={book.author} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
