import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteStudent
} from './Redux/thunks/studentThunk';

export default function StudentDetails({ student }) {

  const dispatch = useDispatch();

  return (
    <div className='card p-3 mb-3'>

      <h4>{student.name}</h4>

      <p>Roll: {student.roll}</p>

      <p>Class: {student.class}</p>

      <button
        className='btn btn-danger'
        onClick={() =>
          dispatch(deleteStudent(student.id))
        }
      >
        Delete
      </button>

    </div>
  );
}