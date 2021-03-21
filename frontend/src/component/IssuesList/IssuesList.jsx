import React from 'react'
import s from './IssuesList.module.css'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    button: {
        marginTop: '2em',
        width: '25em'
    }
})

const IssuesList = ({issues, isCreateMode, toggleIsCreateMode}) => {
    const classes = useStyles()
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
                            className={classes.button}>
                        Создать
                    </Button>
                </NavLink>
            }
        </div>
    )
}

export default IssuesList