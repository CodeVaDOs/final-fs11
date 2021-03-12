import api from "@utils/api";
import { catchError } from "../../utils";

export const houseMaintainService = (data) => (dispatch) => {
    dispatch({ type: "HOUSE_MAINTAIN_REQUEST" });
    api({
        method: 'post',
        url: 'houseMaintenance',
        data
    })
        .then((data) => {
            dispatch({ type: "HOUSE_MAINTAIN_SUCCESS", payload: data });
        })
        .catch(err => {
            catchError(err);
            dispatch({ type: "HOUSE_MAINTAIN_ERROR" });
        });
};

