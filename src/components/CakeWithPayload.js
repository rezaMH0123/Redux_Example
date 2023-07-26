import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

const CakeWithPayload = () => {
  const [number, setNumber] = useState();
  const { numberofcake } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cake -{numberofcake}</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>by cake</button>
    </div>
  );
};

export default CakeWithPayload;
