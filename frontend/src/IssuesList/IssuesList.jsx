import React from 'react'
import s from './IssuesList.module.css'
import { NavLink } from 'react-router-dom'

const IssuesList = ({issues}) => {

    let issuesId = issues.map(issue => <div><NavLink to={'/issue/'+ issue.id}>{issue.id}</NavLink></div>)
    return (
        <div className={s.IssuesList}>
            <h1>Номера заявок: </h1>
            {issuesId}
            <button>Создать</button>
        </div>
    )
}

export default IssuesList