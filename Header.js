import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <h1 className="Header">    
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <Link to="/Home" class="navbar-brand text-white">
    <img id="logoHeader" src="logo192.png" alt="React Logo" width={50}></img>
    Library System</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/AddBook" class="nav-link text-white">Add Books</Link>
        </li>
        <li class="nav-item">
          <Link to="/RegisterStudent" class="nav-link text-white">Register Student</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </h1>

    
  );
}
export default Header;