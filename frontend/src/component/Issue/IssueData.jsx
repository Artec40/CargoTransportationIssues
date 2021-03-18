import React from 'react'
import s from './Issue.module.css'
import { NavLink } from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const IssueData = ({id, issueData, deleteCurrentIssue, startEditMode}) => {
    return (
        <div className={s.Issue}>
            <div className={s.description}>Дата и время получения заявки от клиента:</div>
            <div className={s.value}>{issueData.date}</div>
            <div className={s.description}>Название фирмы клиента:</div>
            <div className={s.value}>{issueData.company}</div>
            <div className={s.description}>ФИО перевозчика:</div>
            <div className={s.value}>{issueData.carrier}</div>
            <div className={s.description}>Контактный телефон перевозчика:</div>
            <div className={s.value}>{issueData.phone}</div>
            <div className={s.description}>Коментарии:</div>
            <div className={s.value}>{issueData.comments}</div>
            <div className={s.description}>ATI код перевозчика:</div>
            <a href={`https://ati.su/firms/${issueData.ATICode}/info`}>
                <div className={s.value}>{issueData.ATICode}</div>
            </a>
            <div>
                <ButtonGroup variant={'contained'}
                             size={'small'}
                             color={'default'}>
                    <Button onClick={() => {startEditMode()}}
                            endIcon={<EditIcon/>}>
                        Редактировать
                    </Button>
                    <Button onClick={() => {deleteCurrentIssue(id)}}
                            endIcon={<DeleteIcon/>}>
                        <NavLink to={''} className={s.navlink}>
                            Удалить
                        </NavLink>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default IssueData