import React, {
    useEffect,
    useState
} from 'react';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    fetchStudents,
    deleteStudent,
    updateStudent
} from './Redux/thunks/studentThunk';

export default function StudentsList() {

    const dispatch = useDispatch();

    const { students } =
        useSelector(state => state.students);

    const [editId, setEditId] =
        useState(null);

    const [editForm, setEditForm] =
        useState({
            name: "",
            roll: "",
            class: ""
        });

    useEffect(() => {

        dispatch(fetchStudents());

    }, [dispatch]);

    // DELETE

    const handleDelete = (id) => {

        dispatch(deleteStudent(id));
    };

    // EDIT BUTTON

    const handleEdit = (student) => {

        setEditId(student.id);

        setEditForm({
            name: student.name,
            roll: student.roll,
            class: student.class
        });
    };

    // UPDATE

    const handleUpdate = (id) => {

        dispatch(updateStudent({
            id,
            ...editForm
        }));

        setEditId(null);
    };

    return (
        <div className='container mt-4'>

            <h1 className='mb-4'>
                Students List
            </h1>

            {
                students.map((student) => (

                    <div
                        key={student.id}
                        className='card p-3 mb-3'
                    >

                        {
                            editId === student.id ? (

                                <div>

                                    <input
                                        type='text'
                                        className='form-control mb-2'
                                        value={editForm.name}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                name:
                                                    e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type='text'
                                        className='form-control mb-2'
                                        value={editForm.roll}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                roll:
                                                    e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type='text'
                                        className='form-control mb-2'
                                        value={editForm.class}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                class:
                                                    e.target.value
                                            })
                                        }
                                    />

                                    <button
                                        className='btn btn-success me-2'
                                        onClick={() =>
                                            handleUpdate(student.id)
                                        }
                                    >
                                        Save
                                    </button>

                                </div>

                            ) : (

                                <div>

                                    <h3>
                                        {student.name}
                                    </h3>

                                    <p>
                                        Roll :
                                        {student.roll}
                                    </p>

                                    <p>
                                        Class :
                                        {student.class}
                                    </p>

                                    <button
                                        className='btn btn-warning me-2'
                                        onClick={() =>
                                            handleEdit(student)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className='btn btn-danger'
                                        onClick={() =>
                                            handleDelete(student.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>
                            )
                        }

                    </div>
                ))
            }

        </div>
    );
}
