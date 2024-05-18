import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks, deleteBook } from '../services/bookService';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await getAllBooks();
    setBooks(result.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <div>
      <h2>Book List</h2>
      <Link to="/add">Add Book</Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
            <Link to={`/edit/${book.id}`}>Edit</Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

