export const getTokens = () => {
  return {
    accessToken: localStorage.getItem("authToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

export const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const setRefreshToken = (token) => {
  localStorage.setItem("refreshToken", token);
};
