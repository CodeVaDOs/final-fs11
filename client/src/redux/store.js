import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from './auth/reducer';
import docReducer from './documents/reducer';
import totalReducer from './total/reducer';
import housesReducer from './houses/reducer';
import notificationsReducer from './notifications/reducer';
import maintainReducer from './houseMaintain/reducer';
import bookingService from './houseBokingService/reducer';
import passwordReducer from './profilePass/reducer';
import analyticReducer from './analytic/reducer';
import { AUTH_ACTIONS } from "./auth/action";
import { getTokens, setAuthToken } from "../utils";


const { applyMiddleware, combineReducers, createStore } = require("redux");

const reducer = combineReducers({
  auth: authReducer,
  documents: docReducer,
  total: totalReducer,
  maintain: maintainReducer,
  bookingService:bookingService,
  houses: housesReducer,
  password:passwordReducer,
  notifications: notificationsReducer,
  analytic: analyticReducer
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
