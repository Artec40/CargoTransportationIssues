import { requestsAPI } from '../api'

const SET_REQUESTS = 'SET_REQUESTS'

let initialState = {
    requests: [],
}

const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REQUESTS: {
            return {
                ...state,
                requests: action.requestsReducer.requests,
            }
        }
            default:
            return state
    }
}

export const setRequests = (requests) => ({
    type: SET_REQUESTS, requests})

export const getRequests = () => async (dispatch) => {
    const requests = await requestsAPI.getRequests()
    dispatch(setRequests(requests.data))
}

export default requestsReducer