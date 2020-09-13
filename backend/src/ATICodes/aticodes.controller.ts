import {Controller, Get} from '@nestjs/common';
import {AticodesService} from './aticodes.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('ATICode')
@Controller('ATICode')
export class AticodesController {
    constructor(private readonly filterService: AticodesService) {
    }

    @Get()
    async getATICodes() : Promise<string[]> {
        return this.filterService.getATICodes()
    }

}
