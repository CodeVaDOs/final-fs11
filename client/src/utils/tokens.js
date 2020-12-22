export const getTokens = () => {
  return {
    accessToken: localStorage.getItem("auth_token"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};
