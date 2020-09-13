import React from 'react'

const SearchIssueForm = ({requiredIssue, setRequiredIssue, getIssuesBySearch}) => {
    return (
        <div>
            <input onChange={(e) => {
                getIssuesBySearch(e.target.value)
            }} value={requiredIssue} placeholder={'Поиск по номеру заявки'}/>
        </div>

    )
}

export default SearchIssueForm