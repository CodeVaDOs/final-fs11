import api from "@utils/api";
import { catchError } from "../../utils";

export const bookingHouse = (data) => (dispatch) => {
    dispatch({ type: "BOOKING_HOUSE_REQUEST" });
    api({
        method: 'post',
        url: 'bookings',
        data
    })
        .then((data) => {
            console.log('Booking house post', data)
            dispatch({ type: "BOOKING_HOUSE_SUCCESS", payload: data });
        })
        .catch(err => {
            catchError(err);
            dispatch({ type: "BOOKING_HOUSE_ERROR" });
        });
};
