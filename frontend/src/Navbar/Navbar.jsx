import React from 'react'
import s from './Navbar.module.css'
import SearchIssueForm from './SearchIssueForm'
import FilterIssueForm from './FilterIssueForm'

const Navbar = ({getCurrentIssue, getIssuesByFilter, issuesId, companies, carriers, ATICodes, setCompanyFilter, companyFilter, setCarrierFilter, carrierFilter, setATICodeFilter, ATICodeFilter, setRequiredIssue, requiredIssue, getIssuesBySearch}) => {

    return (
        <div className={s.Navbar}>
            <FilterIssueForm getIssuesByFilter={getIssuesByFilter}
                             companies={companies}
                             carriers={carriers}
                             ATICodes={ATICodes}
                             setCompanyFilter={setCompanyFilter}
                             companyFilter={companyFilter}
                             setCarrierFilter={setCarrierFilter}
                             carrierFilter={carrierFilter}
                             setATICodeFilter={setATICodeFilter}
                             ATICodeFilter={ATICodeFilter}/>
            <SearchIssueForm setRequiredIssue={setRequiredIssue}
                             requiredIssue={requiredIssue}
                             getIssuesBySearch={getIssuesBySearch}/>
        </div>
    )
}

export default Navbar