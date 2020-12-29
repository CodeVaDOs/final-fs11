import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReduser";

const { applyMiddleware, combineReducers, createStore } = require("redux");
const reducer = combineReducers({
  user:  userReducer
});

export default () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
