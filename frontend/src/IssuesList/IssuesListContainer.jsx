import React from 'react'
import IssuesList from './IssuesList'
import { connect } from 'react-redux'
import { getIssues, toggleIsCreateMode } from '../../src/redux/issues-reducer'
import { getIssuesId, getIsFetching } from '../../src/redux/issues-selector'
import Preloader from '../../src/Preloader/Preloader'

class IssuesListContainer extends React.Component {

    componentDidMount() {
        this.props.getIssues()
    }

    render() {
        return <div>
            {
                this.props.isFetching &&
                <Preloader/>
            }
            {
                !this.props.isFetching &&
                this.props.issues &&
                <IssuesList issues={this.props.issues}
                            isCreateMode={this.props.isCreateMode}
                            toggleIsCreateMode={this.props.toggleIsCreateMode}/>
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        issues: getIssuesId(state),
        isFetching: getIsFetching(state),
        toggleIsCreateMode: toggleIsCreateMode(state),
        isCreateMode: state.issuesPage.isCreateMode
    }
}

export default connect(mapStateToProps, {getIssues, toggleIsCreateMode})(IssuesListContainer)

