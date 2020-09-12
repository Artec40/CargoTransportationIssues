import React from 'react'
import Issue from './Issue'
import { connect } from 'react-redux'
import { getCurrentIssue, deleteCurrentIssue, saveCurrentIssue } from '../../src/redux/issues-reducer'
import { getIssue, getIssueId, getIsFetching } from '../../src/redux/issues-selector'
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
                <Issue
                    id={this.props.issueId}
                    issueData={this.props.issue}
                    deleteCurrentIssue={this.props.deleteCurrentIssue}
                    saveCurrentIssue={this.props.saveCurrentIssue}
                />
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        issue: getIssue(state),
        issueId: getIssueId(state).id,
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {getCurrentIssue, deleteCurrentIssue, saveCurrentIssue}),
    withRouter)
(IssueContainer)

