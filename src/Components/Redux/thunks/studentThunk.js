import axios from "axios";

export const fetchStudents = () => {

    return async (dispatch) => {

        const res = await axios.get(
            "http://localhost:3004/students"
        );

        dispatch({
            type: "FETCH_STUDENTS",
            payload: res.data
        });
    };
};

export const addStudent = (student) => {

    return async (dispatch) => {

        const res = await axios.post(
            "http://localhost:3004/students",
            student
        );

        dispatch({
            type: "ADD_STUDENT",
            payload: res.data
        });
    };
};

export const deleteStudent = (id) => {

    return async (dispatch) => {

        await fetch(
            `http://localhost:5000/students/${id}`,
            {
                method: "DELETE"
            }
        );

        dispatch({
            type: "DELETE_STUDENT",
            payload: id
        });
    };
};

export const updateStudent = (student) => {

    return async (dispatch) => {

        const res = await fetch(
            `http://localhost:5000/students/${student.id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)
            }
        );

        const data = await res.json();

        dispatch({
            type: "UPDATE_STUDENT",
            payload: data
        });
    };
};
