import React from 'react'
import s from './Issue.module.css'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
    <TextField color={'secondary'}
               hintText={label}
               floatingLabelText={label}
               {...input}
               {...custom}
    />
)

const IssueEditDataForm = ({handleSubmit}) => {
    return (
        <form className={s.Issue} onSubmit={handleSubmit}>
            <div className={s.description}>Дата и время получения заявки от клиента:</div>
            <Field className={s.value} name={'date'} component={renderTextField}/>
            <div className={s.description}>Название фирмы клиента:</div>
            <Field className={s.value} name={'company'} component={renderTextField}/>
            <div className={s.description}>ФИО перевозчика:</div>
            <Field className={s.value} name={'carrier'} component={renderTextField}/>
            <div className={s.description}>Контактный телефон перевозчика:</div>
            <Field className={s.value} name={'phone'} component={renderTextField}/>
            <div className={s.description}>Коментарии:</div>
            <Field className={s.value} name={'comments'} component={renderTextField}/>
            <div className={s.description}>ATI код перевозчика:</div>
            <Field className={s.value} name={'ATICode'} component={renderTextField}/>
            <div>
                <Button type={'submit'}
                        endIcon={<SaveIcon/>}
                        variant={'contained'}
                        size={'small'}>
                    Сохранить заявку
                </Button>
            </div>
        </form>
    )
}
const IssueEditDataFormReduxForm = reduxForm({form: 'edit-issue'})(IssueEditDataForm)
export default IssueEditDataFormReduxForm