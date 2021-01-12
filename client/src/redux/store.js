import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const { applyMiddleware, combineReducers, createStore } = require("redux");
const reducer = combineReducers({
  undefined
});

export default () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
