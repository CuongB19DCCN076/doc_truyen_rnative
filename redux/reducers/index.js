import { combineReducers } from "redux";
import test from "./test";
import reTheme from "./theme";
import  historyItem  from "./history";
const allReducers = combineReducers({
 test,reTheme,historyItem // add more reducers here
});
export default allReducers;