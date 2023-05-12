import Render from "./Render";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./redux/reducers/index";
import Content from "./components/main/Content";
const store = createStore(allReducers);
export default function App() {
  return (
    <Provider store={store}>
      <Render />
    </Provider>
  );
}
