import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <h1>My Bookshelf</h1>
      <AddBookForm onAdd={addBook} />
      <BookList books={books} />
    </div>
  );
};

export default App;
