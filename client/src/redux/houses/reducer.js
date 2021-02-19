import { housesTypes } from "./types";

const INIT_STATE = {
  loading: false,
  houses: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case housesTypes.GET_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.payload,
        loading: false,
      };
    case housesTypes.GET_HOUSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case housesTypes.GET_HOUSES_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
