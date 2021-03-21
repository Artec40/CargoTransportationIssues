import React from 'react'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    navbarMUIElementsStyles: {
        color: 'white',
        marginTop: '1vw',
        width: '100%'
    }
})

const FilterIssueForm = ({
                             companies, carriers, ATICodes, getIssuesByFilter,
                             setCompanyFilter, companyFilter, setCarrierFilter,
                             carrierFilter, setATICodeFilter, ATICodeFilter
                         }) => {

    const classes = useStyles()

    let companiesOptions = companies.map(company => <MenuItem value={company}>{company}</MenuItem>)
    let carriersOptions = carriers.map(carrier => <MenuItem value={carrier}>{carrier}</MenuItem>)
    let ATICodesOptions = ATICodes.map(ATIcode => <MenuItem value={ATIcode}>{ATIcode}</MenuItem>)

    const startFilterIssues = () => {
        getIssuesByFilter(encodeURI(companyFilter), encodeURI(carrierFilter), encodeURI(ATICodeFilter))
    }

    return (
        <div>
            <div><b>Фильтр заявок</b></div>
            <div>
                <InputLabel className={classes.navbarMUIElementsStyles} id={'companyFilter'}>по фирме</InputLabel>
                <Select className={classes.navbarMUIElementsStyles}
                        defaultValue={companyFilter}
                        id={'companyFilter'}
                        color={'secondary'}
                        onChange={(e) => {
                            setCompanyFilter(e.target.value)
                        }}>
                    <MenuItem value={''}>Выберите значение</MenuItem>
                    {companiesOptions}
                </Select>
            </div>
            <div>
                <InputLabel className={classes.navbarMUIElementsStyles} id={'carrierFilter'}>по перевозчику</InputLabel>
                <Select className={classes.navbarMUIElementsStyles}
                        defaultValue={carrierFilter}
                        id={'carrierFilter'}
                        color={'secondary'}
                        onChange={(e) => {
                            setCarrierFilter(e.target.value)
                        }}>
                    <MenuItem value={''}>Выберите значение</MenuItem>
                    {carriersOptions}
                </Select>
            </div>
            <div>
                <InputLabel className={classes.navbarMUIElementsStyles} id={'ATICodeFilter'}>по перевозчику</InputLabel>
                <Select className={classes.navbarMUIElementsStyles}
                        defaultValue={ATICodeFilter}
                        id={'ATICodeFilter'}
                        color={'secondary'}
                        onChange={(e) => {
                            setATICodeFilter(e.target.value)
                        }}>
                    <MenuItem value={''}>Выберите значение</MenuItem>
                    {ATICodesOptions}
                </Select>
            </div>
            <Button className={classes.navbarMUIElementsStyles} variant="outlined" onClick={startFilterIssues}>Поиск по
                фильтру</Button>
        </div>
    )
}

export default FilterIssueForm