import {Module} from '@nestjs/common';
import {AticodesController} from './aticodes.controller';
import {AticodesService} from './aticodes.service';

@Module({
    controllers: [AticodesController],
    providers: [AticodesService],
})
export class AticodesModule {
}
