import React from 'react'
import s from './Issue.module.css'
import { Field, handleSubmit, reduxForm } from 'redux-form'

const IssueEditDataForm = ({handleSubmit}) => {
    return (
        <form className={s.Issue} onSubmit={handleSubmit}>
            <div className={s.description}>Дата и время получения заявки от клиента:</div>
            <Field className={s.value} name={'date'} component={'input'}/>
            <div className={s.description}>Название фирмы клиента:</div>
            <Field className={s.value} name={'company'} component={'input'}/>
            <div className={s.description}>ФИО перевозчика:</div>
            <Field className={s.value} name={'carrier'} component={'input'}/>
            <div className={s.description}>Контактный телефон перевозчика:</div>
            <Field className={s.value} name={'phone'} component={'input'}/>
            <div className={s.description}>Коментарии:</div>
            <Field className={s.value} name={'comments'} component={'input'}/>
            <div className={s.description}>ATI код перевозчика:</div>
            <Field className={s.value} name={'ATICode'} component={'input'}/>
            <div>
                <button>Сохранить заявку</button>
            </div>
        </form>
    )
}
const IssueEditDataFormReduxForm = reduxForm({form: 'edit-issue'})(IssueEditDataForm)
export default IssueEditDataFormReduxForm