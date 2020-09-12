import React from 'react'
import s from './IssuesList.module.css'
import { NavLink } from 'react-router-dom'

const IssuesList = ({issues, isCreateMode, toggleIsCreateMode}) => {

    let issuesId = issues.map(issue => <div><NavLink to={'/issue/' + issue.id}>{issue.id}</NavLink></div>)

    return (
        <div className={s.IssuesList}>
            <h1>Номера заявок: </h1>
            {issuesId}
            {
                !isCreateMode &&
                //todo Нужно что-то придумать с нажатием кнопки со стартовой страницы
                <NavLink to={'/issue/10001'}>
                    <button onClick={() => {toggleIsCreateMode(true)}}>Создать</button>
                </NavLink>
            }
        </div>
    )
}

export default IssuesList