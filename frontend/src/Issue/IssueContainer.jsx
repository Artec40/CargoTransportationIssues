import React from 'react'
import Issue from './Issue'
import { connect } from 'react-redux'
import { getCurrentIssue, deleteCurrentIssue } from '../../src/redux/issues-reducer'
import { getIssue, getIsFetching } from '../../src/redux/issues-selector'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Preloader from '../../src/Preloader/Preloader'

class IssueContainer extends React.Component {

    refreshIssue() {
        let issueId = this.props.match.params.issueId
        this.props.getCurrentIssue(issueId)
    }

    componentDidMount() {
        this.refreshIssue()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.issueId != prevProps.match.params.issueId) {
            this.refreshIssue()
        }
    }

    render() {
        return <div>
            {
                this.props.isFetching &&
                <Preloader/>}
            {
                !this.props.isFetching &&
                this.props.issue &&
                <Issue id={this.props.issue.id}
                       company={this.props.issue.company}
                       ATICode={this.props.issue.ATICode}
                       carrier={this.props.issue.carrier}
                       comments={this.props.issue.comments}
                       date={this.props.issue.date}
                       phone={this.props.issue.phone}
                       deleteCurrentIssue={this.props.deleteCurrentIssue}
                />
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        issue: getIssue(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {getCurrentIssue, deleteCurrentIssue}),
    withRouter)
(IssueContainer)

