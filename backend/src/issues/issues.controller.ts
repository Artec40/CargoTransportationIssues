import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {IssuesService} from './issues.service';
import {SaveIssuesDto} from './issues.dto';
import {Issue} from './issue.interface';

@Controller('issue')
export class IssuesController {
    constructor(private readonly issuesService: IssuesService) {
    }

    @Get()
    async getIssues(@Query('company') company: string,
                    @Query('carrier') carrier: string,
                    @Query('ATICode') ATICode: string): Promise<Issue[]> {
        return this.issuesService.getIssues(
           company ? decodeURI(company) : undefined,
            carrier ? decodeURI(carrier) : undefined,
            ATICode ? decodeURI(ATICode) : undefined
        )
    }

    @Get(':number')
    async getIssue(@Param('number') issueNumber: string): Promise<Issue> {
        return this.issuesService.getIssue(Number(issueNumber))
    }

    @Post()
    async Create(@Body() saveIssuesDto: SaveIssuesDto) {
        this.issuesService.createIssue({number: undefined, ...saveIssuesDto})
    }

    @Put(':number')
    async update(@Param('number') issueNumber: string, @Body() saveIssuesDto: SaveIssuesDto) {
        this.issuesService.updateIssue({number: Number(issueNumber), ...saveIssuesDto})
    }

    @Delete(':number')
    async remove(@Param('number') issueNumber: string) {
        this.issuesService.removeIssue(Number(issueNumber))
    }
}
