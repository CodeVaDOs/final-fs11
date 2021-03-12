const INIT_STATE = {
    loading: false,
    type:'',
    text:'',
    bookingId:'',
    isActive: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "HOUSE_BOOKING_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "HOUSE_BOOKING_SUCCESS":
            return {
                ...state,
                accessPanel: action.payload,
                loading: false
            };
        case "HOUSE_BOOKING_ERROR":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};