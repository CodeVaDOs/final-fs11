import {ANALYTIC_TYPES, analyticTypes} from "./types";

const initState = {
    isLoading: false,
    analytic: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case analyticTypes.GET_ANALYTIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                analytic: action.payload
            }
        case analyticTypes.GET_ANALYTIC_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case analyticTypes.GET_ANALYTIC_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        default:
            return state;
    }
}