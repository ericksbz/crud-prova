import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createBook, getBookById, updateBook } from '../services/bookService';

function BookForm() {
  const [book, setBook] = useState({ title: '', author: '', isbn: '' });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadBook();
    }
  }, [id]);

  const loadBook = async () => {
    const result = await getBookById(id);
    setBook(result.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateBook(id, book);
    } else {
      await createBook(book);
    }
    history.push('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author</label>
          <input type="text" name="author" value={book.author} onChange={handleChange} required />
        </div>
        <div>
          <label>ISBN</label>
          <input type="text" name="isbn" value={book.isbn} onChange={handleChange} required />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default BookForm;

