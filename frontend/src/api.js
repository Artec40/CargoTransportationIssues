import * as axios from 'axios/index'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Credentials': 'true'
    }
})

export const issuesAPI = {
    getIssues() {
        return instance.get('issue/')
    },
    getIssuesByFilter(company, carrier, ATICode) {
        return instance.get(`issue?company=${company}&carrier=${carrier}&ATICode=${ATICode}`)
    },
    getIssuesBySearch(issueId) {
        return instance.get(`issue?id=${issueId}`)
    },
    getIssue(id) {
        return instance.get(`issue/${id}`)
    },
    deleteIssue(id) {
        return instance.delete(`issue/${id}`)
    },
    changeIssue(id, issue) {
        return instance.put(`issue/${id}`, issue)
    },
    createIssue(issue) {
        return instance.post('issue/', issue)
    },
    getAllCompanies(){
        return instance.get('company/')
    },
    getAllCarriers(){
        return instance.get('carrier/')
    },
    getAllATICodes(){
        return instance.get('ATICode/')
    }
}