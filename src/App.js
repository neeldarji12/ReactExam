import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './Components/Redux/store';

import Navbar from './Components/Navbar';

import StudentsList from './Components/StudentsList';

import StudentForm from './Components/StudentForm';

import Login from './Components/Login';

import PrivateRoute from './Components/PrivateRoute';

export default function App() {

  return (

    <Provider store={store}>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path='/'
            element={<StudentsList />}
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/add'
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </Provider>
  );
}