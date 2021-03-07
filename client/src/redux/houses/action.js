// import api from "@utils/api";
// import { catchError } from "../../utils";
// import { housesTypes } from "./types";
//
//
// const getHouses = () => (dispatch) => {
//   dispatch({ type: housesTypes.GET_HOUSES_REQUEST });
//   api.get(`houses`)
//     .then((houses) => {
//       console.log("Fetched houses: ", houses);
//       dispatch({ type: housesTypes.GET_HOUSES_SUCCESS, payload: houses });
//     })
//     .catch(err => {
//       catchError(err);
//       dispatch({ type: housesTypes.GET_HOUSES_FAILURE });
//     });
// };
//
// export const housesActions = {
//   getHouses,
// };
