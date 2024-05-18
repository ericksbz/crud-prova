import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/bookService';

function BookDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadBook();
  }, [id]);

  const loadBook = async () => {
    const result = await getBookById(id);
    setBook(result.data);
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
    </div>
  );
}

export default BookDetail;

