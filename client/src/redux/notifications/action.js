import api from "@utils/api";
import { catchError } from "../../utils";

const setNotifications = (notifications) => (dispatch) => {
    dispatch({ type: "NOTIFICATION_SAVE_REQUEST" });
    api.post('notifications', notifications)
        .then((data) => {
            console.log("Saved notifications: ", data);
            dispatch({ type: "NOTIFICATION_SAVE_SUCCESS"});
        })
        .catch(err => {
            catchError(err);
            dispatch({ type: "NOTIFICATION_SAVE_ERROR" });
        });
};

export const NOTIFICATION_ACTIONS = {
    setNotifications,
};