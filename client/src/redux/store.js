import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from './auth/reducer';
import { getTokens, setAuthToken } from "../utils";

const { applyMiddleware, combineReducers, createStore } = require("redux");

console.log(authReducer);
const reducer = combineReducers({
  auth: authReducer
});

export default () => {
  const { accessToken } = getTokens();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (accessToken) {
    setAuthToken(accessToken);
    // store.dispatch(AUTH_ACTIONS.fetchProfile())
  }

  return store;
};
