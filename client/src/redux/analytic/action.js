import moment from 'moment';
import api from "../../utils/api";
import {analyticTypes} from "./types";

const getAnalytics = (
    houseId = 0,
    fromDate = moment().startOf('month').format('yyyy-MM-DD'),
    toDate = moment().format('yyyy-MM-DD')
) => dispatch => {
    dispatch({type: analyticTypes.GET_ANALYTIC_REQUEST})
    api({
        method: 'GET',
        url: 'statistic',
        params: {
            fromDate,
            toDate,
            houseId
        }
    })
        .then(data => {
            dispatch({type: analyticTypes.GET_ANALYTIC_SUCCESS, payload: data})
        })
        .catch(err => dispatch({type: analyticTypes.GET_ANALYTIC_FAILURE}))
}

export const analyticActions = {
    getAnalytics
}