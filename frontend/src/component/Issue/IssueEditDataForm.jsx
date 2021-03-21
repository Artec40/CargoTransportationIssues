import React from 'react'
import s from './Issue.module.css'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textField: {
        marginBottom: '2em',
        width: '80%'
    }
})
const renderTextField = ({input, label, meta: {touched, error}, custom, description, styles}) => (
    <div>
        <TextField color={'secondary'}
                   hintText={label}
                   floatingLabelText={label}
                   {...input}
                   {...custom}
                   label={description}
                   className={styles}
        />
    </div>
)

const IssueEditDataForm = ({handleSubmit}) => {
    const classes = useStyles()
    return (
        <form className={s.Issue} onSubmit={handleSubmit}>
            <Field name={'date'} component={renderTextField} styles={classes.textField}
                   description={'Дата и время получения заявки от клиента'}/>
            <Field name={'company'} component={renderTextField} styles={classes.textField}
                   description={'Название фирмы клиента'}/>
            <Field name={'carrier'} component={renderTextField} styles={classes.textField}
                   description={'ФИО перевозчика'}/>
            <Field name={'phone'} component={renderTextField} styles={classes.textField}
                   description={'Контактный телефон перевозчика'}/>
            <Field name={'comments'} component={renderTextField} styles={classes.textField}
                   description={'Комментарии'}/>
            <Field name={'ATICode'} component={renderTextField} styles={classes.textField}
                   description={'ATI код перевозчика'}/>
            <div>
                <Button type={'submit'} endIcon={<SaveIcon/>}
                        variant={'contained'} size={'small'}>
                    Сохранить заявку
                </Button>
            </div>
        </form>
    )
}
const IssueEditDataFormReduxForm = reduxForm({form: 'edit-issue'})(IssueEditDataForm)
export default IssueEditDataFormReduxForm