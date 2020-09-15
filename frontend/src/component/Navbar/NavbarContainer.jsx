import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import {
    getIssuesByFilter,
    getIssuesBySearch,
    getFilterData
} from '../../redux/issues-reducer'
import { getAllATICodes, getAllCarriers, getAllCompanies } from '../../redux/issues-selector'
import Preloader from '../Preloader/Preloader'
import { setCompanyFilter } from '../../redux/issues-action'
import { setATICodeFilter, setCarrierFilter, setRequiredIssue } from '../../redux/issues-action'

class NavbarContainer extends React.Component {

    componentDidMount() {
        this.props.getFilterData()
    }

    render() {
        return <>
            {
                this.props.isFetching &&
                <Preloader/>}
            {
                !this.props.isFetching &&
                this.props.companies &&
                this.props.carriers &&
                this.props.ATICodes &&
                <Navbar
                    companies={this.props.companies}
                    carriers={this.props.carriers}
                    ATICodes={this.props.ATICodes}
                    getIssuesByFilter={this.props.getIssuesByFilter}
                    setCompanyFilter={this.props.setCompanyFilter}
                    setCarrierFilter={this.props.setCarrierFilter}
                    setATICodeFilter={this.props.setATICodeFilter}
                    companyFilter={this.props.companyFilter}
                    carrierFilter={this.props.carrierFilter}
                    ATICodeFilter={this.props.ATICodeFilter}
                    setRequiredIssue={this.props.setRequiredIssue}
                    getIssuesBySearch={this.props.getIssuesBySearch}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        companies: getAllCompanies(state),
        carriers: getAllCarriers(state),
        ATICodes: getAllATICodes(state),
        companyFilter: state.issuesPage.companyFilter,
        carrierFilter: state.issuesPage.carrierFilter,
        ATICodeFilter: state.issuesPage.ATICodeFilter,
        requiredIssue: state.issuesPage.requiredIssue
    }
}

export default connect(mapStateToProps, {
    getIssuesByFilter,
    setCompanyFilter,
    setCarrierFilter,
    setATICodeFilter,
    setRequiredIssue,
    getIssuesBySearch,
    getFilterData
})(NavbarContainer)

