import React from 'react'
import IssueCreator from './IssueCreator'
import {
    createIssue,
    toggleIsCreateMode
} from '../../src/redux/issues-reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Preloader from '../../src/Preloader/Preloader'
import { getIsFetching } from '../../src/redux/issues-selector'

class IssueCreatorContainer extends React.Component {
    render() {
        return <div>
            {
                this.props.isFetching &&
                <Preloader/>
            }
            {
                !this.props.isFetching &&
                <IssueCreator createIssue={this.props.createIssue}
                              toggleIsCreateMode={this.props.toggleIsCreateMode}
                              isCreateMode={this.props.isCreateMode}
                />
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isCreateMode: state.issuesPage.isCreateMode,
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {createIssue, toggleIsCreateMode}),
    withRouter)
(IssueCreatorContainer)
