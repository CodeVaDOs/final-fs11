import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from './auth/reducer';
import docReducer from './documents/reducer';
import totalReducer from './total/reducer';
import maintainReducer from './houseMaintain/reducer';
import { AUTH_ACTIONS } from "./auth/action";
import { getTokens, setAuthToken } from "../utils";


const { applyMiddleware, combineReducers, createStore } = require("redux");

console.log(authReducer);
console.log(docReducer);
const reducer = combineReducers({
  auth: authReducer,
  documents: docReducer,
  total: totalReducer,
  maintain: maintainReducer
});

export default () => {
  const { accessToken } = getTokens();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (accessToken) {
    setAuthToken(accessToken);
    store.dispatch(AUTH_ACTIONS.getProfile());
  }

  return store;
};
