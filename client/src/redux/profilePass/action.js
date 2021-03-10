import api from "@utils/api";
import { catchError } from "../../utils";

export const updatePassword = (data) => (dispatch) => {
    dispatch({ type: "POST_PASSWORD_REQUEST" });
    api({
        method: 'put',
        url: 'users/changePassword',
        data
    })
        .then((data) => {
            console.log("Post new password : ", data);
            dispatch({ type: "POST_PASSWORD_SUCCESS", payload: data });
        })
        .catch(err => {
            catchError(err);
            dispatch({ type: "POST_PASSWORD_ERROR" });
        });
};

