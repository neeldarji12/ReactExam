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