import {Issue} from "./issue.interface";

export class ReadIssuesDto {
    issues: Issue[]
}

export class ReadIssueDto {
    issue: Issue
}

export class CreateIssuesDto {
    issue: Issue
}
