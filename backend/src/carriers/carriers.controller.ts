import {Controller, Get} from '@nestjs/common';
import {CarriersService} from './carriers.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('carrier')
@Controller('carrier')
export class CarriersController {
    constructor(private readonly filterService: CarriersService) {
    }

    @Get()
    async getCarriers() : Promise<string[]> {
        return this.filterService.getCarriers()
    }

}
