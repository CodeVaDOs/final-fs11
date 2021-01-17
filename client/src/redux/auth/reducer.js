import { getTokens } from "../../utils";

const { accessToken } = getTokens();

const INIT_STATE = {
  authorized: Boolean(accessToken),
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