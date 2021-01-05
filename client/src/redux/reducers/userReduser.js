import { LOCALES } from "../../i18n";
import { SET_LOCALE } from "../constants/types";
const initialUserState = { languages: LOCALES.UKRAINIAN };

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        ...{ languages: action.payload }
      };
    default:
      return state;
  }
};

export default userReducer;
