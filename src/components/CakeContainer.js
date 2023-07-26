import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

const CakeContainer = () => {
  const { numberofcake } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cake -{numberofcake}</h2>
      <button onClick={() => dispatch(buyCake())}>by cake</button>
    </div>
  );
};

export default CakeContainer;
