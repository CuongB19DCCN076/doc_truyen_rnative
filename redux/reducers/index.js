import { combineReducers } from "redux";
import test from "./test";
import reTheme from "./theme";
import reComment from "./comment";
import  historyItem  from "./history";
const allReducers = combineReducers({
 test,reTheme,historyItem, reComment // add more reducers here
});
export default allReducers;