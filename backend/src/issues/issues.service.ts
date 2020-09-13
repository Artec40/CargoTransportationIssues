import {HttpException, HttpStatus, Injectable, Query} from '@nestjs/common';
import {Issue} from './issue.interface';
import {store} from "../store";

@Injectable()
export class IssuesService {

    getIssues(company: string,
              carrier: string,
              ATICode: string): Issue[] {
        let resultIssue: Issue[] =
            store.issues.filter(issue =>
                 (!company || issue.company === company) &&
                (!carrier || issue.carrier === carrier) &&
                (!ATICode || issue.ATICode === ATICode))
        return resultIssue
    }

    getIssue(number: number): Issue {
        let resultIssue: Issue = store.issues.find(issue => issue.number === number)
        if (!resultIssue)
            throw new HttpException('Issue with this number does not exist', HttpStatus.NOT_FOUND)
        return resultIssue
    }

    createIssue(issue: Issue) {
        store.issueLastNumber++
        issue.number = store.issueLastNumber
        store.issues.push(issue)
    }

    removeIssue(number: number) {
        store.issues = store.issues.filter(issue => issue.number !== number)
    }

    updateIssue(updatedIssue: Issue) {
        store.issues = store.issues.map(issue => issue.number === updatedIssue.number ? updatedIssue : issue)
    }
}
