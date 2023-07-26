import { BUY_CAKE } from "./cakeType";

const initialState = {
  numberofcake: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberofcake: state.numberofcake - action.payload };

    default:
      return state;
  }
};

export default cakeReducer;
