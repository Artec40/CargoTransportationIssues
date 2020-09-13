import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { getCurrentIssue, getIssuesByFilter, setCompanyFilter, setCarrierFilter, setATICodeFilter } from '../../src/redux/issues-reducer'
import { getIssuesId, getAllATICodes, getAllCarriers, getAllCompanies } from '../../src/redux/issues-selector'
import Preloader from '../../src/Preloader/Preloader'

class NavbarContainer extends React.Component {

    render() {
        return <>
            {
                this.props.isFetching &&
                <Preloader/>}
            {
                !this.props.isFetching &&
                this.props.issuesId &&
                this.props.companies &&
                this.props.carriers &&
                this.props.ATICodes &&
                <Navbar
                    issuesId={this.props.issuesId}
                    getCurrentIssue={this.props.getCurrentIssue}
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

                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        issuesId: getIssuesId(state),
        companies: getAllCompanies(state),
        carriers: getAllCarriers(state),
        ATICodes: getAllATICodes(state),
        companyFilter: state.issuesPage.companyFilter,
        carrierFilter: state.issuesPage.carrierFilter,
        ATICodeFilter: state.issuesPage.ATICodeFilter
    }
}

export default connect(mapStateToProps, {getCurrentIssue, getIssuesByFilter, setCompanyFilter, setCarrierFilter, setATICodeFilter})(NavbarContainer)

