import { issuesAPI } from '../api'
import {
    SET_ATI_CODE_FILTER,
    SET_CARRIER_FILTER,
    SET_COMPANY_FILTER,
    SET_CURRENT_ISSUE, SET_FILTER_DATA,
    SET_ISSUES, SET_REQUIRED_ISSUE,
    TOGGLE_IS_CREATE_MODE,
    TOGGLE_IS_FETCHING,
    setCurrentIssue,
    setFilterData,
    setIssues,
    toggleIsFetching
} from './issues-action'

let initialState = {
    issues: [],
    currentIssue: {},
    isFetching: false,
    isCreateMode: false,
    filterData: {},
    companyFilter: '',
    carrierFilter: '',
    ATICodeFilter: '',
    requiredIssue: ''
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
        case TOGGLE_IS_CREATE_MODE: {
            return {
                ...state,
                isCreateMode: action.isCreateMode
            }
        }
        case SET_FILTER_DATA: {
            return {
                ...state,
                filterData: action.filterData
            }
        }
        case SET_COMPANY_FILTER: {
            return {
                ...state,
                companyFilter: action.company
            }
        }
        case SET_CARRIER_FILTER: {
            return {
                ...state,
                carrierFilter: action.carrier
            }
        }
        case SET_ATI_CODE_FILTER: {
            return {
                ...state,
                ATICodeFilter: action.ATICode
            }
        }
        case SET_REQUIRED_ISSUE: {
            return {
                ...state,
                requiredIssue: action.requiredIssue
            }
        }
        default:
            return state
    }
}

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

export const saveCurrentIssue = (id, issue) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    await issuesAPI.changeIssue(id, issue)
    dispatch(getCurrentIssue(id))
    dispatch(getFilterData())
    dispatch(toggleIsFetching(false))
}

export const createIssue = (issue) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    await issuesAPI.createIssue(issue)
    dispatch(getIssues())
    dispatch(getFilterData())
    dispatch(toggleIsFetching(false))
}

export const getIssuesByFilter = (company, carrier, ATICode) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const request = await issuesAPI.getIssuesByFilter(company, carrier, ATICode)
    dispatch(setIssues(request.data))
    dispatch(toggleIsFetching(false))
}

export const getIssuesBySearch = (issueId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const request = await issuesAPI.getIssuesBySearch(issueId)
    dispatch(setIssues(request.data))
    dispatch(toggleIsFetching(false))
}

export const getFilterData = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const companies = await issuesAPI.getAllCompanies()
    const carriers = await issuesAPI.getAllCarriers()
    const ATIcodes = await issuesAPI.getAllATICodes()
    dispatch(setFilterData(companies.data, carriers.data, ATIcodes.data))
    dispatch(toggleIsFetching(false))
}

export default issuesReducer