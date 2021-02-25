import { documentTypes } from "./types";

const INIT_STATE = {
  loading: false,
  documents: {
    list: [],
    total: 1
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case documentTypes.GET_DOCUMENTS_SUCCESS:
      return {
        ...state,
        documents: action.payload,
        loading: false,
      };
    case documentTypes.GET_DOCUMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case documentTypes.GET_DOCUMENTS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
