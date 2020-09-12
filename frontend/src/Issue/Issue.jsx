import React, { useState } from 'react'
import s from './Issue.module.css'
import IssueData from './IssueData'
import IssueEditDataForm from './IssueEditDataForm'

const Issue = ({id, issueData, deleteCurrentIssue, saveCurrentIssue, createIssue, isCreateMode, toggleIsCreateMode}) => {

    let [editMode, setEditMode] = useState(false)


    const onEditSubmit = (formData) => {
        saveCurrentIssue(id, formData).then(() => {
            setEditMode(false)
        })
    }

    const onCreateSubmit = (formData) => {
        createIssue(formData).then(() => {
            toggleIsCreateMode(false)
        })
    }

    return (
        <div className={s.Issue}>
            <h1>Заявка №{id}</h1>
            {
                !isCreateMode &&
                (
                    editMode
                        ? <IssueEditDataForm initialValues={issueData} onSubmit={onEditSubmit}/>
                        : <IssueData id={id}
                                     issueData={issueData}
                                     deleteCurrentIssue={deleteCurrentIssue}
                                     goToEditMode={() => {
                                         setEditMode(true)
                                     }}/>)
            }
            {
                isCreateMode &&
                <IssueEditDataForm onSubmit={onCreateSubmit}/>
            }
        </div>
    )
}

export default Issue