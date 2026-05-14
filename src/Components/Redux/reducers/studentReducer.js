const initialState = {
    students: [],
    loading: false,
    error: ""
};

const studentReducer = (state = initialState, action) => {

    switch (action.type) {

        case "FETCH_STUDENTS":
            return {
                ...state,
                students: action.payload
            };

        case "ADD_STUDENT":
            return {
                ...state,
                students: [...state.students, action.payload]
            };

        case "DELETE_STUDENT":

            return {
                ...state,
                students: state.students.filter(
                    (student) =>
                        student.id !== action.payload
                )
            };

        case "UPDATE_STUDENT":

            return {
                ...state,

                students: state.students.map(
                    (student) =>

                        student.id === action.payload.id
                            ? action.payload
                            : student
                )
            };

        default:
            return state;
    }
};

export default studentReducer;
