import api from "@utils/api";
import { catchError } from "../../utils";

const getAccessPanel = () => (dispatch) => {
  dispatch({ type: "TOTAL_ACCESS_PANEL_REQUEST" });
  api.get('total/accessPanel')
    .then((data) => {
      console.log("Fetched access panel: ", data);
      dispatch({ type: "TOTAL_ACCESS_PANEL_SUCCESS", payload: data });
    })
    .catch(err => {
      catchError(err);
      dispatch({ type: "TOTAL_ACCESS_PANEL_ERROR" });
    });
};

const getCatalogue = () => (dispatch) => {
  dispatch({ type: "TOTAL_CATALOGUE_REQUEST" });
  api.get('total/catalogue')
    .then((data) => {
      console.log("Fetched catalogue: ", data);
      dispatch({ type: "TOTAL_CATALOGUE_SUCCESS", payload: data });
    })
    .catch(err => {
      catchError(err);
      dispatch({ type: "TOTAL_CATALOGUE_ERROR" });
    });
};

export const TOTAL_ACTIONS = {
  getAccessPanel, 
  getCatalogue
};