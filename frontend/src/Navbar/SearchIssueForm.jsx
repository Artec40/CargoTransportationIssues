import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SearchIssueForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'issueId'} placeholder={'Номер заявки'} component={'input'}/>
                <button>Поиск по номеру</button>
        </form>

    )
}

const SearchIssueFormReduxForm = reduxForm({form: 'search-issue'})(SearchIssueForm)
export default SearchIssueFormReduxForm