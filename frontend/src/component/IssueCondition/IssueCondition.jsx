import React from 'react'
import s from './IssueCondition.module.css'

const IssueCondition = ({condition}) => {
    return (
        <div className={s.IssueCondition}>
            {
                condition === 'startApp' &&
                <h1>Выберите заявку</h1>
            }
            {
                condition === 'createIssue' &&
                <h1>Заявка создана</h1>
            }
        </div>
    )
}

export default IssueCondition