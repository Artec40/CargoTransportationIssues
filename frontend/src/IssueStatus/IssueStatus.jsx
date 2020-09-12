import React from 'react'
import s from './IssueStatus.module.css'

const IssueStatus = (props) => {
    return (
        <div className={s.IssueStatus}>
            {
                (props.issue === 'emptyIssue') &&
                <h1>Выберите заявку</h1>
            }
            {
                (props.issue === 'deletedIssue') &&
                <h1>Заявка удалена</h1>
            }
        </div>
    )
}

export default IssueStatus