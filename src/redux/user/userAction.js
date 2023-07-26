import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export function fetchusersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

export function fetchusersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export function fetchusersSuccess(user) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user,
  };
}

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchusersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        dispatch(fetchusersSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchusersFailure(error.message));
      });
  };
};
