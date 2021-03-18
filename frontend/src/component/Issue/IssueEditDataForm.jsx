import React from 'react'
import s from './Issue.module.css'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
//todo настроить форму, работающую с materiaLUI
const IssueEditDataForm = ({handleSubmit, initialValues}) => {
    return (
        <form className={s.Issue} onSubmit={handleSubmit}>
            <TextField className={s.value}
                       color={'secondary'}
                       label={'Дата и время получения заявки от клиента'}
                       value={initialValues? initialValues.date : ''}/>
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
                <button>sd</button>
                <Button endIcon={<SaveIcon/>} variant={'contained'} size={'small'}>Сохранить заявку</Button>
            </div>
        </form>
    )
}
const IssueEditDataFormReduxForm = reduxForm({form: 'edit-issue'})(IssueEditDataForm)
export default IssueEditDataFormReduxForm