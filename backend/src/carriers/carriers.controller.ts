import {Controller, Get} from '@nestjs/common';
import {CarriersService} from './carriers.service';


@Controller('carrier')
export class CarriersController {
    constructor(private readonly filterService: CarriersService) {
    }

    @Get()
    async getCarriers() : Promise<string[]> {
        return this.filterService.getCarriers()
    }

}
