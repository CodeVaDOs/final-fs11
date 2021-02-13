import api from "@utils/api";
import { catchError } from "../../utils";
import { documentTypes } from "./types";


const getDocuments = () => (dispatch) => {
  dispatch({ type: documentTypes.GET_DOCUMENTS_REQUEST });
  api.get('documents')
    .then((documents) => {
      console.log("Fetched documents: ", documents);
      dispatch({ type: documentTypes.GET_DOCUMENTS_SUCCESS, payload: documents });
    })
    .catch(err => {
      catchError(err);
      dispatch({ type: documentTypes.GET_DOCUMENTS_FAILURE });
    });
};

export const documentsAction = {
  getDocuments,
};
