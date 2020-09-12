import { issuesAPI } from '../api'

const SET_ISSUES = 'SET_ISSUES'
const SET_CURRENT_ISSUE = 'SET_CURRENT_ISSUE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    issues: [],
    currentIssue: {},
    isFetching: false
}

const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISSUES: {
            return {
                ...state,
                issues: action.issues
            }
        }
        case SET_CURRENT_ISSUE: {
            return {
                ...state,
                currentIssue: action.currentIssue
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const setIssues = (issues) => ({
    type: SET_ISSUES, issues
})
export const setCurrentIssue = (currentIssue) => ({
    type: SET_CURRENT_ISSUE, currentIssue
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export const getIssues = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const request = await issuesAPI.getIssues()
    dispatch(setIssues(request.data))
    dispatch(toggleIsFetching(false))
}

export const getCurrentIssue = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const request = await issuesAPI.getIssue(id)
    dispatch(setCurrentIssue(request.data))
    dispatch(toggleIsFetching(false))
}
export const deleteCurrentIssue = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    await issuesAPI.deleteIssue(id)
    dispatch(getIssues())
    dispatch(toggleIsFetching(false))
}

export default issuesReducer