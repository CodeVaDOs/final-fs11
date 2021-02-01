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
        loading: true,
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

    case "GET_PROFILE":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case "GET_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        authorized: false,
        user: {}
      };

    case "LOGOUT":
      return {
        ...INIT_STATE,
        authorized: false,
      };

    case "FORGOT_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FORGOT_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false
      };

    case "FORGOT_PASSWORD_FAILURE":
      return {
        ...state,
        loading: false
      };

    case "CHANGE_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false
      };

    case "CHANGE_PASSWORD_FAILURE":
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
