import {Injectable} from '@nestjs/common';
import {store} from "../store";

@Injectable()
export class AticodesService {
    getATICodes(): string[] {
        let ATIcodes: string[] = []
        store.issues.map(issue => {
            if (!ATIcodes.includes(issue.ATICode))
                ATIcodes.push(issue.ATICode)
        })
        return ATIcodes
    }
}

