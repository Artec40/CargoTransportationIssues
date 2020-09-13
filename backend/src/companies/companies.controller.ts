import {Controller, Get} from '@nestjs/common';
import {CompaniesService} from './companies.service';


@Controller('company')
export class CompaniesController {
    constructor(private readonly filterService: CompaniesService) {
    }

    @Get()
    async getCompanies(): Promise<string[]> {
        return this.filterService.getCompanies()
    }

}
