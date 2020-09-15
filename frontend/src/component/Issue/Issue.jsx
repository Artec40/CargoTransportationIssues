import React, { useState } from 'react'
import s from './Issue.module.css'
import IssueData from './IssueData'
import IssueEditDataForm from './IssueEditDataForm'

const Issue = ({id, issueData, deleteCurrentIssue, saveCurrentIssue}) => {

    let [editMode, setEditMode] = useState(false)

    const onEditSubmit = (formData) => {
        saveCurrentIssue(id, formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.Issue}>
            <h1>Заявка №{id}</h1>
            {
                editMode
                    ? <IssueEditDataForm initialValues={issueData} onSubmit={onEditSubmit}/>
                    : <IssueData id={id}
                                 issueData={issueData}
                                 deleteCurrentIssue={deleteCurrentIssue}
                                 startEditMode={() => {
                                     setEditMode(true)
                                 }}/>
            }
        </div>
    )
}

export default Issue