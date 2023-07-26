import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeWithPayload />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
