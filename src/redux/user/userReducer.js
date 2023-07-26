import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loadding: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loadding: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loadding: false, error: "", data: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loadding: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default userReducer;
