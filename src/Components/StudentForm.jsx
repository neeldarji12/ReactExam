import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addStudent } from './Redux/thunks/studentThunk';

export default function StudentForm() {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        roll: "",
        class: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(addStudent(form));

        setForm({
            name: "",
            roll: "",
            class: ""
        });
    };

    return (
        <div className='container mt-4'>

            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={form.name}
                    onChange={handleChange}
                    className='form-control mb-2'
                />

                <input
                    type='text'
                    name='roll'
                    placeholder='Roll'
                    value={form.roll}
                    onChange={handleChange}
                    className='form-control mb-2'
                />

                <input
                    type='text'
                    name='class'
                    placeholder='Class'
                    value={form.class}
                    onChange={handleChange}
                    className='form-control mb-2'
                />

                <button className='btn btn-primary'>
                    Add Student
                </button>

            </form>

        </div>
    );
}