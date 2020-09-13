import {Injectable} from '@nestjs/common';
import {store} from "../store";

@Injectable()
export class CompaniesService {

    getCompanies(): string[] {
        let companies: string[] = []
        store.issues.map(issue => {
            if (!companies.includes(issue.company))
                companies.push(issue.company)
        })
        return companies
    }
}
