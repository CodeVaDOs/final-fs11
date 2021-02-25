import axios from "axios";
import { getTokens, setAuthToken, setRefreshToken } from '@utils/tokens';

const api = axios.create({
  baseURL: '/api/v1',
});

api.interceptors.response.use(
  response => response.data,
  async function (error) {
    const { refreshToken } = getTokens();
    const originalRequest = error.config;

    if (originalRequest._retry) {
      setAuthToken();
      setRefreshToken();
    } else if (error.response.status === 401) {
      originalRequest._retry = true;

      return await axios
        .get('/api/v1/auth/refresh', {
          headers: {
            "Refresh-token": refreshToken,
          }
        })
        .then(({ data }) => {
          setAuthToken(data.token);
          setRefreshToken(data.refreshToken);
          originalRequest.headers.Authorization = data.token;
          return api(originalRequest);
        })
        .catch(err => {
          setAuthToken();
          setRefreshToken();
          history.push("/login");
        });

    }

    return Promise.reject(error);
  }
);

export default api;
