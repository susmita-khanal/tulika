import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import changeTheme from "./reducer";

const rootReducer = combineReducers({
  changeTheme,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
