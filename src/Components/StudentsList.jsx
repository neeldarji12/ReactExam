import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchStudents } from './Redux/thunks/studentThunk';

export default function StudentsList() {

    const dispatch = useDispatch();

    const { students } =
        useSelector(state => state.students);

    const [search, setSearch] = useState("");

    const [sortType, setSortType] = useState("");

    useEffect(() => {

        dispatch(fetchStudents());

    }, [dispatch]);

    // Searching
    let filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(
            search.toLowerCase()
        )
    );

    // Sorting
    if (sortType === "name") {

        filteredStudents.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sortType === "roll") {

        filteredStudents.sort((a, b) =>
            a.roll - b.roll
        );
    }

    return (
        <div className='container mt-4'>

            <h1 className='mb-4'>
                Students List
            </h1>

            {/* Search Input */}

            <input
                type='text'
                placeholder='Search Student Name'
                className='form-control mb-3'
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            {/* Sorting */}

            <select
                className='form-select mb-4'
                value={sortType}
                onChange={(e) =>
                    setSortType(e.target.value)
                }
            >

                <option value="">
                    Sort By
                </option>

                <option value="name">
                    Name
                </option>

                <option value="roll">
                    Roll Number
                </option>

            </select>

            {/* Student Data */}

            {
                filteredStudents.map((student) => (

                    <div
                        key={student.id}
                        className='card p-3 mb-3'
                    >

                        <h3>{student.name}</h3>

                        <p>
                            Roll :
                            {student.roll}
                        </p>

                        <p>
                            Class :
                            {student.class}
                        </p>

                    </div>
                ))
            }

        </div>
    );
}