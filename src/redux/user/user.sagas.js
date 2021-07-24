import { all, call, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { loadEmployeesDetails, getAllEmployees } from "./user.action";
import axios from "axios";


// add user to app state from database
export function* getDetails() {
  yield console.log("i fired");

  const res = yield axios.get("http://localhost:8090/users");
  const data = yield res.data;

  console.log(res);
  console.log(data);
  // add users received to the app state
  yield put(loadEmployeesDetails(data.data));
}

// delete user from database
export function* deleteUser({payload: {id}}) {
  console.log(id)
  const res = yield axios.delete(`http://localhost:8090/users/${id}`);
  console.log(res)
  alert('deleted succesfully')
  yield put(getAllEmployees())
}



//listen to all action calls
export function* getUserDetails() {
  yield takeLatest(UserActionTypes.GET_USERS_DETAIL, getDetails);
}
export function* deleteEmployee(id) {
  console.log(id)
  yield takeLatest(UserActionTypes.DELETE_USERS_DETAIL, deleteUser);
}


export function* userSagas() {
  yield all([call(getUserDetails)]);
  yield all([call(deleteEmployee)]);
}
