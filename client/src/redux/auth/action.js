import api from "@utils/api";
import { catchError, setAuthToken, setRefreshToken } from "../../utils";


const getProfile = () => (dispatch) => {
  api.get('users/profile')
    .then((profile) => {
      console.log("Fetched profile: ", profile);
      dispatch({ type: "GET_PROFILE", payload: profile });
    })
    .catch(err => {
      dispatch({ type: "GET_PROFILE_FAILURE" });
    });
};

const logOut = () => (dispatch) => {
  api.get('auth/logout')
    .then(() => {
      console.log("success logout");
    });
  setAuthToken();
  setRefreshToken();
  dispatch({ type: "LOGOUT" });
};

const logIn = (values) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  setAuthToken();
  setRefreshToken();

  api
    .post('auth/login', values)
    .then((data) => {
      console.log("success log in");
      setAuthToken(data.token);
      setRefreshToken(data.refreshToken);
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    })
    .catch((err) => {
      catchError(err);
      dispatch({ type: "LOGIN_FAILURE" });
    });
};

// const fetchProfile = () => (dispatch) => {
//   const { accessToken } = getTokens();
//   dispatch(ACTIONS.profile.request());
//
//   api
//     .get(URLS.USER.PROFILE, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//     .then((data) => {
//       successToastMessage("Welcome back!");
//       dispatch(ACTIONS.login.success(data));
//     })
//     .catch((err) => {
//       catchError(err);
//       dispatch(performLogout());
//     });
// };

export const AUTH_ACTIONS = {
  logIn,
  logOut,
  getProfile
};
