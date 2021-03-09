const INIT_STATE = {
    loading: false,
    password:[]
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "POST_PASSWORD_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "POST_PASSWORD_SUCCESS":
            return {
                password: action.payload,
                loading: false,
            };
        case "POST_PASSWORD_ERROR":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
