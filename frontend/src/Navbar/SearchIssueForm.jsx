import React from 'react'
import s from './Navbar.module.css'

const SearchIssueForm = ({requiredIssue, setRequiredIssue, getIssuesBySearch}) => {
    return (
        <div className={s.SearchIssueForm}>
            <div><b>Поиск заявок</b></div>
            <input onChange={(e) => {
                getIssuesBySearch(e.target.value)
            }} value={requiredIssue} placeholder={'Поиск по номеру заявки'}/>
        </div>

    )
}

export default SearchIssueForm