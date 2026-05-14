import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from "redux";

import { thunk } from "redux-thunk";

import studentReducer from "./reducers/studentReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({

    students: studentReducer,

    auth: authReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);