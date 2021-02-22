const INIT_STATE = {
  loading: false,
  houses: {
    list: [],
    total: 0
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_HOUSES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_HOUSES_SUCCESS":
      return {
        ...state,
        houses: action.payload,
        loading: false,
      };
    case "GET_HOUSES_ERROR":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
