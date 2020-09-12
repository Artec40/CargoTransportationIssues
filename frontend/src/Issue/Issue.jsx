import React, { useState } from 'react'
import s from './Issue.module.css'
import IssueData from './IssueData'
import IssueDataForm from './IssueDataForm'

const Issue = ({id, issueData, deleteCurrentIssue, saveCurrentIssue}) => {

    let [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
        saveCurrentIssue(id, formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.Issue}>
            <h1>Заявка №{id}</h1>

            {editMode
                ? <IssueDataForm initialValues={issueData} onSubmit={onSubmit}/>
                : <IssueData id={id}
                             issueData={issueData}
                             deleteCurrentIssue={deleteCurrentIssue}
                             goToEditMode={() => {
                                 setEditMode(true)
                             }}/>
            }
        </div>
    )
}

export default Issue