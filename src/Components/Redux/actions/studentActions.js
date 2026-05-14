export const fetchStudentsRequest = () => {
  return {
    type: "FETCH_STUDENTS_REQUEST"
  };
};

export const fetchStudentsSuccess = (students) => {
  return {
    type: "FETCH_STUDENTS_SUCCESS",
    payload: students
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: "FETCH_STUDENTS_FAILURE",
    payload: error
  };
};

export const addStudentSuccess = (student) => {
  return {
    type: "ADD_STUDENT",
    payload: student
  };
};

export const updateStudentSuccess = (student) => {
  return {
    type: "UPDATE_STUDENT",
    payload: student
  };
};

export const deleteStudentSuccess = (id) => {
  return {
    type: "DELETE_STUDENT",
    payload: id
  };
};