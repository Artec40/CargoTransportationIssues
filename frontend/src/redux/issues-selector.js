export const getIssuesId = state => {
    return state.issuesPage.issues.map(issues => ({id: issues.number}))
}

export const getIssue = state => {
    return {
        company: state.issuesPage.currentIssue.company,
        ATICode: state.issuesPage.currentIssue.ATICode,
        carrier: state.issuesPage.currentIssue.carrier,
        comments: state.issuesPage.currentIssue.comments,
        date: state.issuesPage.currentIssue.date,
        phone: state.issuesPage.currentIssue.phone
    }
}

export const getIssueId = state => {
    return {
        id: state.issuesPage.currentIssue.number,
    }
}

export const getIsFetching = (state) => {
    return state.issuesPage.isFetching
}

export const getAllCompanies = (state) => {
    return state.issuesPage.filterData.companies
}

export const getAllCarriers = (state) => {
    return state.issuesPage.filterData.carriers
}

export const getAllATICodes = (state) => {
    return state.issuesPage.filterData.ATIcodes
}
