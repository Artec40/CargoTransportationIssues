import React from 'react'
import Input from '@material-ui/core/Input'
import s from './Navbar.module.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    input: {
        color: 'white',
        marginTop: '1vw',
        width: '100%'
    }
})

const SearchIssueForm = ({requiredIssue, setRequiredIssue, getIssuesBySearch}) => {
    const classes = useStyles()

    return (
        <div className={s.SearchIssueForm}>
            <div><b>Поиск заявок</b></div>
            <Input className={classes.input}
                   placeholder={'Поиск по номеру заявки'}
                   color={'secondary'}
                   value={requiredIssue}
                   onChange={(e) => {
                       getIssuesBySearch(e.target.value)
                   }}/>
        </div>

    )
}

export default SearchIssueForm