export const SET_ISSUES = 'SET_ISSUES'
export const SET_CURRENT_ISSUE = 'SET_CURRENT_ISSUE'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_IS_CREATE_MODE = 'TOGGLE_IS_CREATE_MODE'
export const SET_FILTER_DATA = 'SET_FILTER_DATA'
export const SET_COMPANY_FILTER = 'SET_COMPANY_FILTER'
export const SET_CARRIER_FILTER = 'SET_CARRIER_FILTER'
export const SET_ATI_CODE_FILTER = 'SET_ATI_CODE_FILTER'
export const SET_REQUIRED_ISSUE = 'SET_REQUIRED_ISSUE'

export const setIssues = (issues) => ({
    type: SET_ISSUES, issues
})
export const setCompanyFilter = (company) => ({
    type: SET_COMPANY_FILTER, company
})
export const setCarrierFilter = (carrier) => ({
    type: SET_CARRIER_FILTER, carrier
})
export const setATICodeFilter = (ATICode) => ({
    type: SET_ATI_CODE_FILTER, ATICode
})
export const setRequiredIssue = (requiredIssue) => ({
    type: SET_ATI_CODE_FILTER, requiredIssue
})
export const setCurrentIssue = (currentIssue) => ({
    type: SET_CURRENT_ISSUE, currentIssue
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const toggleIsCreateMode = (isCreateMode) => ({
    type: TOGGLE_IS_CREATE_MODE, isCreateMode
})
export const setFilterData = (companies, carriers, ATIcodes) => ({
    type: SET_FILTER_DATA, filterData:{companies, carriers, ATIcodes}
})