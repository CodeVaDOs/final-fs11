const INIT_STATE = {
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "NOTIFICATION_SAVE_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "NOTIFICATION_SAVE_SUCCESS":
      return {
        ...state,
        loading: false
      };
    case "TOTAL_ACCESS_PANEL_ERROR":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};