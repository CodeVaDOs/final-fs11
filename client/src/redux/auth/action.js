import api from "@utils/api";
import { catchError, setAuthToken, setRefreshToken } from "../../utils";


export const updateUser = (data) => (dispatch) => {
  dispatch({ type: "EDIT_PROFILE_REQUEST" });
  api({
    method: 'put',
    url: 'users',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then(res => res.json())
    .then((data) =>  {
        console.log("Edit profile: ", data);
        dispatch({ type: "EDIT_PROFILE_SUCCESS", payload: data });
    })
    .catch(err => {
        catchError(err);
        dispatch({ type: "EDIT_PROFILE_ERROR" });
    });
}

const getProfile = () => (dispatch) => {
  dispatch({ type: "GET_PROFILE_REQUEST" });
  api.get('users/profile')
    .then((profile) => {
      console.log("Fetched profile: ", profile);
      dispatch({ type: "GET_PROFILE", payload: profile });
    })
    .catch(err => {
      catchError(err);
      dispatch({ type: "GET_PROFILE_FAILURE" });
    });
};
const getAdminInfo = () => (dispatch) => {
  dispatch({ type: "GET_ADMIN_REQUEST" });
  api.get('total/accessPanel')
      .then((data) => {
        console.log("Fetched admin data: ", data);
        dispatch({ type: "GET_ADMIN_SUCCESS", payload: data });
      })
      .catch(err => {
        catchError(err);
        dispatch({ type: "GET_ADMIN_FAILURE" });
      });
};

const logOut = () => (dispatch) => {
  setAuthToken();
  setRefreshToken();
  dispatch({ type: "LOGOUT" });
};

const logIn = (values) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  dispatch({ type: "GET_ADMIN_REQUEST" });
  setAuthToken();
  setRefreshToken();

  console.log("test");

  api
    .post('auth/login', values)
    .then((data) => {
      console.log("success log in");
      setAuthToken(data.token);
      setRefreshToken(data.refreshToken);
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      dispatch(getProfile());
      dispatch(getAdminInfo());
    })
    .catch((err) => {
      catchError(err);
      dispatch({ type: "LOGIN_FAILURE" });
      dispatch({ type: "GET_ADMIN_FAILURE" });
    });
};

const forgotPassword = (values) => (dispatch) => {
  dispatch({ type: "FORGOT_PASSWORD_REQUEST" });

  api
    .post('auth/forgotPassword', values)
    .then(() => {
      dispatch({ type: "FORGOT_PASSWORD_SUCCESS" });
    })
    .catch((err) => {
      catchError(err);
      dispatch({ type: "FORGOT_PASSWORD_FAILURE" });
    });
};

const changePassword = (values, token) => (dispatch) => {
  dispatch({ type: "CHANGE_PASSWORD_REQUEST" });

  api
    .post('auth/updatePassword', values, { headers: { "Token": token } })
    .then(() => {
      dispatch({ type: "CHANGE_PASSWORD_SUCCESS" });
    })
    .catch((err) => {
      catchError(err);
      dispatch({ type: "CHANGE_PASSWORD_FAILURE" });
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
  getProfile,
  forgotPassword,
  changePassword,
  updateUser,
  getAdminInfo
};
