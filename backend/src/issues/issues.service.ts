import {HttpException, HttpStatus, Injectable, Redirect} from '@nestjs/common';
import {Issue} from "./issue.interface";

const issues: Issue[] = [
    {
        number: '10001',
        company: 'Управление Автомобильных Перевозок Европа+Азия, ООО',
        ATICode: '12345',
        carrier: 'Василий Петрович Драгошанский',
        comments: '',
        date: '05.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10002',
        company: '"ТД "Знамя Труда", ЗАО',
        ATICode: '12345',
        carrier: 'Дмитрий Петрович Петров',
        comments: '',
        date: '06.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10003',
        company: 'Автокомплекс АТП №7, ООО',
        ATICode: '12342',
        carrier: 'Василий Андреевич Грегорьев',
        comments: '',
        date: '06.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10004',
        company: 'Управление Автомобильных Перевозок Европа+Азия, ООО',
        ATICode: '12345',
        carrier: 'Василий Петрович Драгошанский',
        comments: '',
        date: '07.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10005',
        company: '"ТД "Знамя Труда", ЗАО',
        ATICode: '12341',
        carrier: 'Александр Павлович Селиванов',
        comments: '',
        date: '07.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10006',
        company: 'Автокомплекс АТП №7, ООО',
        ATICode: '12333',
        carrier: 'Василий Петрович Драгошанский',
        comments: '',
        date: '08.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10007',
        company: 'Управление Автомобильных Перевозок Европа+Азия, ООО',
        ATICode: '12345',
        carrier: 'Василий Петрович Драгошанский',
        comments: '',
        date: '09.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10008',
        company: '"ТД "Знамя Труда", ЗАО',
        ATICode: '12320',
        carrier: 'Дмитрий Петрович Петров',
        comments: '',
        date: '09.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10009',
        company: 'Управление Автомобильных Перевозок Европа+Азия, ООО',
        ATICode: '12345',
        carrier: 'Василий Петрович Драгошанский',
        comments: '',
        date: '09.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10010',
        company: '"ТД "Знамя Труда", ЗАО',
        ATICode: '12310',
        carrier: 'Василий Петрович Драгошанский',
        comments: '',
        date: '10.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10011',
        company: 'Автокомплекс АТП №7, ООО',
        ATICode: '12300',
        carrier: 'Василий Андреевич Грегорьев',
        comments: '',
        date: '10.09.2020',
        phone: '8(800)5553535'
    },
    {
        number: '10012',
        company: 'Автокомплекс АТП №7, ООО',
        ATICode: '11451',
        carrier: 'Дмитрий Петрович Петров',
        comments: '',
        date: '11.09.2020',
        phone: '8(800)5553535'
    },
]

@Injectable()
export class IssuesService {
    getIssues(): Issue[] {
        return issues
    }

    getIssue(number: string): Issue {
        let resultIssue: Issue = undefined
        issues.forEach(issue => {
            if (issue.number === number)
                resultIssue = issue
        })
        if (resultIssue === undefined)
            throw new HttpException('Issue with this number does not exist', HttpStatus.NOT_FOUND)
        return resultIssue
    }

    createIssue(issue: Issue) {
        issues.push(issue)
    }

/*    removeIssue(issue: Issue){
        issues.
    }*/
}
