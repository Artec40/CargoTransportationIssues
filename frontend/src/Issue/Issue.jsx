import React from 'react'
import s from './Issue.module.css'
import { NavLink } from 'react-router-dom'

const Issue = (props) => {

    return (
        <div className={s.Issue}>
            <h1>Заявка №{props.id}</h1>
            <div className={s.description}>Дата и время получения заявки от клиента:</div>
            <div className={s.value}>{props.date}</div>
            <div className={s.description}>Название фирмы клиента:</div>
            <div className={s.value}>{props.company}</div>
            <div className={s.description}>ИО перевозчика:</div>
            <div className={s.value}>{props.carrier}</div>
            <div className={s.description}>Контактный телефон перевозчика:</div>
            <div className={s.value}>{props.phone}</div>
            <div className={s.description}>Коментарии:</div>
            <div className={s.value}>{props.comments}</div>
            <div className={s.description}>ATI код перевозчика</div>
            <div className={s.value}>{props.ATICode}</div>
            <div>
                <button>Редактировать</button>
                <NavLink to={''}>
                    <button onClick={() => {props.deleteCurrentIssue(props.id)}}>Удалить</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Issue