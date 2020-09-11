import { issuesAPI } from '../api'

const SET_ISSUES = 'SET_ISSUES'

let initialState = {
    issues: [],
}

const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISSUES: {
            debugger
            return {
                ...state,
                issues: action.issues,
            }
        }
            default:
            return state
    }
}

export const setIssues = (issues) => ({
    type: SET_ISSUES, issues})

export const getIssues = () => async (dispatch) => {
    const request = await issuesAPI.getIssues()
    dispatch(setIssues(request.data))
}

export default issuesReducer