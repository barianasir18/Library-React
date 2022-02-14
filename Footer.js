import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
        <div class="bg-dark py-3 mt-5 ">
            <div class="footer-top">
            <div class="container">
            <div class="row">

          <div class="col-lg-4 col-md-6">
            <h3 class="text-white">Library System</h3>
            <img id="logoHeader" src="logo192.png" alt="React Logo" width={50} class="ms-5"></img>
          </div>

          <div class="col-lg-4 col-md-6">
            <h4 class="text-white">Pages</h4>
            <ul class="ps-0">
              <li><a href="RegisterStudent.js" class="text-white text-decoration-none">Register Students</a></li>
              <li><a href="AddBook.js" class="text-white text-decoration-none">Add Books</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-contact text-end">
            <h4 class="text-white">Contact Details</h4>
            <p class="text-white">
              <strong>Phone: </strong>
              <a class="text-white text-decoration-none" href='tel:03265011122'>03265011122</a>
              <br></br>
              <strong>Email: </strong>
              <a class="text-white text-decoration-none" href='mailto:barianasir18@gmail.com'>barianasir18@gmail.com</a>
            </p>

          </div>
        </div>
      </div>
    </div>
<hr class="bg-white container"></hr>
    <div class="container copyright text-white text-center">
        Created By- Baria Nasir. All Rights Reserved | Site Credits
    </div>
  </div>
  );
}