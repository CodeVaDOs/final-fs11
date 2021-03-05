const INIT_STATE = {
    loading: false,
    serviceType:'',
    text:'',
    houseId:'',
    isActive: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "HOUSE_MAINTAIN_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "HOUSE_MAINTAIN_SUCCESS":
            return {
                ...state,
                accessPanel: action.payload,
                loading: false
            };
        case "HOUSE_MAINTAIN_ERROR":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};