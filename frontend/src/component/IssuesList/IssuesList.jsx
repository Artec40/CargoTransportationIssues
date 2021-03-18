import React from 'react'
import s from './IssuesList.module.css'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const IssuesList = ({issues, isCreateMode, toggleIsCreateMode}) => {

    let issuesId = issues.map(issue => <div><NavLink to={'/issue/' + issue.id}>{issue.id}</NavLink></div>)

    return (
        <div className={s.IssuesList}>
            <h1>Номера заявок: </h1>
            {issuesId}
            {
                !isCreateMode &&
                <NavLink to={'/create'}>
                    <Button onClick={() => {toggleIsCreateMode(true)}}
                            variant={'contained'}
                            size={'small'}
                            className={s.buttonLink}>
                        Создать
                    </Button>
                </NavLink>
            }
        </div>
    )
}

export default IssuesList