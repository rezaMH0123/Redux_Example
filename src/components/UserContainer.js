import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userAction";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loadding, data, error } = userData;
  const dispatch = useDispatch();
  console.log(userData);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      <h2>USER LIST</h2>
      {loadding ? (
        <div>loadding...</div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        data && (
          <div>
            {data.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserContainer;
