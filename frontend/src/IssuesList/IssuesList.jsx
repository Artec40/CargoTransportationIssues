import React from 'react'
import s from './IssuesList.module.css'

const IssuesList = ({issues}) => {

    let issuesId = issues.map(issues=> <li>{issues.id}</li>)
    return (
        <div className={s.IssuesList}>
            Номер заявки: {}
            <ul>{issuesId}</ul>
        </div>
    )
}

export default IssuesList