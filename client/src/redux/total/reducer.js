const INIT_STATE = {
  loading: false,
  accessPanel: {},
  catalogue: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "TOTAL_ACCESS_PANEL_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TOTAL_ACCESS_PANEL_SUCCESS":
      return {
        ...state,
        accessPanel: action.payload,
        loading: false
      };
    case "TOTAL_ACCESS_PANEL_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "TOTAL_CATALOGUE_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TOTAL_CATALOGUE_SUCCESS":
      return {
        ...state,
        catalogue: action.payload,
        loading: false
      };
    case "TOTAL_CATALOGUE_ERROR":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};