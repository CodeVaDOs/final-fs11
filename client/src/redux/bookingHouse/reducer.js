const INIT_STATE = {
    loading: false,
    fromDate: "",
    toDate: "",
    isOwner: true,
    houseId: '',
    renter: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "BOOKING_HOUSE_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "BOOKING_HOUSE_SUCCESS":
            return {
                ...state,
                accessPanel: action.payload,
                loading: false
            };
        case "BOOKING_HOUSE_ERROR":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};