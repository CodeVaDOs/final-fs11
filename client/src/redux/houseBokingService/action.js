import api from "@utils/api";
import { catchError } from "../../utils";

export const houseBookingService = (data) => (dispatch) => {
    dispatch({ type: "HOUSE_BOOKING_REQUEST" });
    api({
        method: 'post',
        url: 'bookingMaintenance',
        data
    })
        .then((data) => {
            dispatch({ type: "HOUSE_BOOKING_SUCCESS", payload: data });
        })
        .catch(err => {
            catchError(err);
            dispatch({ type: "HOUSE_BOOKING_ERROR" });
        });
};

