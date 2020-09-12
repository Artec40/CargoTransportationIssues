import React from 'react'
import s from './Issue.module.css'
import { NavLink } from 'react-router-dom'

const IssueData = ({id, issueData, deleteCurrentIssue, goToEditMode}) => {
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
            <div className={s.value}>{issueData.ATICode}</div>
            <div>
                <button onClick={() => {goToEditMode()}}>Редактировать</button>
                <NavLink to={''}>
                    <button onClick={() => {deleteCurrentIssue(id)}}>Удалить</button>
                </NavLink>
            </div>
        </div>
    )
}

export default IssueData