import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

export default function Home() {
  return (
        <div>
            <Header/>
            <h1 class="text-center py-5">Welcome to Library Management System</h1>
            <div class="d-flex container mt-5 justify-content-between">
                <div class="col-md-4 card">
                    <div class="card-body bg-dark rounded shadow-lg">
                        <h5 class="card-title text-center text-white">Students</h5>
                        <div class="text-center py-3">
                        <Link to="/RegisterStudent" class="btn btn-primary">Register Student</Link>
                        </div>
                        
                    </div>
                </div>
                    
                <div class="col-md-4 card">
                    <div class="card-body bg-dark rounded shadow-lg">
                        <h5 class="card-title text-center text-white">Books</h5>
                        <div class="text-center py-3">
                            <Link to="/AddBook" class="btn btn-primary">Add Books</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}