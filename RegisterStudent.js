import React, { useState, useEffect } from 'react';
import Header from './Header';
import './style.css';

export default function RegisterStudent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
//   const [borrowedBy, setborrowedBy] = useState('');
  const [borrowedDate, setborrowedDate] = useState('');
  const [returnDate, setreturnDate] = useState('');
  const [booksArr, setBooksArr] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (firstName && lastName && bookName && bookAuthor && borrowedDate && returnDate) {
      const newBook = {
        firstName,
        lastName,
        bookName,
        bookAuthor,
        // borrowedBy,
        borrowedDate,
        returnDate,
      };
      
      localStorage.setItem('books', JSON.stringify([...booksArr, newBook]));
      setBooksArr([...booksArr, newBook]); 
    }

  };

  const removeBook = (index) => {
    if (booksArr) {
      const newArray = booksArr.filter((book, bookIndex) => {
        return bookIndex !== index;
      });

      localStorage.setItem('books', JSON.stringify(newArray));
      setBooksArr(newArray);
    }
  };
 

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) setBooksArr(JSON.parse(storedBooks));
  }, []);

  return ( 
    <div>
      <Header/>
      <div class="container bg-light mt-5">
        <h1 className="text-center pt-5">Register Student</h1>
      <form class="row g-3 container p-5 bookForm" onSubmit={(e) => submitHandler(e)}>
      <div class="col-md-6">
    <label class="form-label">First Name</label>
    <input type="text" class="form-control" id="bookName" name="bookName" maxLength="40" onChange={(e) => setFirstName(e.target.value)} required/>
  </div>
  <div class="col-md-6">
    <label class="form-label">Last Name</label>
    <input type="text" class="form-control" id="bookName" name="bookName" maxLength="40" onChange={(e) => setLastName(e.target.value)} required/>
  </div>        
  <div class="col-md-6">
    <label class="form-label">Book Name</label>
    <input type="text" class="form-control" id="bookName" name="bookName" maxLength="40" onChange={(e) => setBookName(e.target.value)} required/>
  </div>
  <div class="col-md-6">
    <label class="form-label">Book Author</label>
    <input type="text" class="form-control" id="bookAuthor" name="bookAuthor" maxLength="30" onChange={(e) => setBookAuthor(e.target.value)} required
    />
  </div>
  <div class="col-md-6">
    <label class="form-label">Date of Borrow</label>
    <input type="date" class="form-control" id="borrowedDate" name="borrowedDate" maxLength="30" onChange={(e) => setborrowedDate(e.target.value)} required
    />
  </div>
  <div class="col-md-6">
    <label class="form-label">Expected Date of Return</label>
    <input type="date" class="form-control" id="returnDate" name="returnDate" maxLength="30" onChange={(e) => setreturnDate(e.target.value)} required
    />
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="submit">Register New Student</button>
  </div>
</form>

</div>
<div class="container mt-5 bg-light p-5">
  <h1 class="text-center mb-5">Registered Students</h1>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>First Name</th>
            <th>Last Author</th>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Book Borrowed By</th>
            <th>Borrowed Date</th>
            <th>Return Date</th>
            <th colSpan="2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {booksArr
            ? booksArr.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.bookName}</td>
                    <td>{item.bookAuthor}</td>
                    <td>{item.firstName}</td>
                    <td>{item.borrowedDate}</td>
                    <td>{item.returnDate}</td>
                    <td id="settings">
                      <button class="btn btn-danger" onClick={() => removeBook(index)}>Remove</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      </div>
    </div>
  );
}
