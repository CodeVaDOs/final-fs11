import api from "@utils/api";
import { catchError } from "../../utils";


const getHouses = (search = '') => (dispatch) => {
  dispatch({ type: "GET_HOUSES_REQUEST" });
  api.get(`houses?&searchString=${search}`)
    .then((houses) => {
      dispatch({ type: "GET_HOUSES_SUCCESS", payload: houses });
    })
    .catch(err => {
      catchError(err);
      dispatch({ type: "GET_HOUSES_ERROR" });
    });
};

export const HOUSES_ACTION = {
  getHouses,
};
