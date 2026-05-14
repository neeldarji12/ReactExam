import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>

      <div className='container'>

        <Link className='navbar-brand' to="/add">
          Student Managment
        </Link>

        <div>

          <Link
            className='btn btn-light me-2'
            to="/"
          >
            Students
          </Link>

          <Link
            className='btn btn-warning'
            to="/add"
          >
            Add Student
          </Link>
          

        </div>

      </div>

    </nav>
  );
}