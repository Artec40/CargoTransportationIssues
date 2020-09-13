import {Injectable} from '@nestjs/common';
import {store} from "../store";

@Injectable()
export class CarriersService {

    getCarriers(): string[] {
        let carriers: string[] = []
        store.issues.map(issue => {
            if (!carriers.includes(issue.carrier))
                carriers.push(issue.carrier)
        })
        return carriers
    }
}