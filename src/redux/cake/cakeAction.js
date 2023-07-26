import { BUY_CAKE } from "./cakeType";

function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payload: number,
  };
}

export default buyCake;
