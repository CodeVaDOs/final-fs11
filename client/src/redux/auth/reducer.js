import { getTokens } from "../../utils";

const { accessToken } = getTokens();
// authorized: Boolean(accessToken),
const INIT_STATE = {
  authorized: true,
  loading: false,
  user: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        authorized: true,
        loading: false
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        authorized: false
      };

    case "LOGOUT": {
      return {
        ...INIT_STATE,
        authorized: false,
      };
    }

    default:
      return state;
  }
};
