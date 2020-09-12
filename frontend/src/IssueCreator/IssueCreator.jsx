import React from 'react'
import s from '../Issue/Issue.module.css'
import IssueEditDataForm from '../Issue/IssueEditDataForm'
import IssueCondition from '../IssueCondition/IssueCondition'

const IssueCreator = ({createIssue, isCreateMode, toggleIsCreateMode}) => {

    const onCreateSubmit = (formData) => {
        createIssue(formData).then(() => {
            toggleIsCreateMode(false)
        })
    }

    return (
        <div>
            {
                isCreateMode
                    ? <div className={s.Issue}>
                        <h1>Создание заявки</h1>
                        <IssueEditDataForm onSubmit={onCreateSubmit}/>
                    </div>
                    : <IssueCondition condition={'createIssue'}/>
            }
        </div>
    )
}

export default IssueCreator