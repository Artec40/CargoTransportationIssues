import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Issue} from './issue.interface';
import {store} from "./store";

@Injectable()
export class IssuesService {

    getIssues(): Issue[] {
        return store.issues
    }

    getIssue(number: number): Issue {
        let resultIssue: Issue = store.issues.find(issue => issue.number === number)
        if (!resultIssue)
            throw new HttpException('IssueStatus with this number does not exist', HttpStatus.NOT_FOUND)
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
