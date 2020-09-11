import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {IssuesService} from './issues.service';
import {ReadIssuesDto, ReadIssueDto, CreateIssuesDto} from "./issues.dto";

@Controller('issue')
export class IssuesController {
    constructor(private readonly issuesService: IssuesService) {
    }

    @Get()
    async getIssues(): Promise<ReadIssuesDto> {
        return {
            issues: this.issuesService.getIssues() //ReadIssuesDto = {issues: Issue[]}
        }
    }

    @Get(':number')
    async getIssue(@Param('number') number): Promise<ReadIssueDto> {
        return {
            issue: this.issuesService.getIssue(number)
        }
    }

    @Post()
    async Create(@Body() createIssueDto: CreateIssuesDto) {
        this.issuesService.createIssue(createIssueDto.issue)
    }

    @Delete(':number')
    remove(@Param('number') number: RemoveIssuesDto) {
        return {
            issue: this.issuesService.RemoveIssue(number)
        }
    }
}
