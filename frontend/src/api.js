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
    getCurrentIssue(id) {
        return instance.get(`issue/${id}`)
    }
}