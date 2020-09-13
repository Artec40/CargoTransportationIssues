import {Module} from '@nestjs/common';
import {IssuesModule} from "./issues/issues.module";
import {CompaniesModule} from "./companies/companies.module";
import {AticodesModule} from "./ATICodes/aticodes.module";
import {CarriersModule} from "./carriers/carriers.module";

@Module({
    imports: [IssuesModule, CompaniesModule, AticodesModule, CarriersModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
