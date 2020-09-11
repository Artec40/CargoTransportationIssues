export const getIssuesId = state => {
    return state.issuesPage.issues.map(issues => ({id: issues.number}))
}