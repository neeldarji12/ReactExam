import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export default function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        // Simple Authentication

        if (
            form.email === "admin@gmail.com" &&
            form.password === "12345"
        ) {

            dispatch({
                type: "LOGIN"
            });

            alert("Login Successfully");

            navigate("/add");

        } else {

            alert("Invalid Email or Password");
        }
    };

    return (
        <div className='container mt-5'>

            <div className='row justify-content-center'>

                <div className='col-md-5'>

                    <div className='card p-4 shadow'>

                        <h2 className='text-center mb-4'>
                            Login
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                className='form-control mb-3'
                                value={form.email}
                                onChange={handleChange}
                            />

                            <input
                                type='password'
                                name='password'
                                placeholder='Enter Password'
                                className='form-control mb-3'
                                value={form.password}
                                onChange={handleChange}
                            />

                            <button className='btn btn-primary w-100'>
                                Login
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}