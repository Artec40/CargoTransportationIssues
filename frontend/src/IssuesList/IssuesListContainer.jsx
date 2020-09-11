import React from 'react'
import IssuesList from './IssuesList'
import { connect } from 'react-redux'
import { getIssues } from '../../src/redux/issues-reducer'
import { getIssuesId } from '../../src/redux/issues-selector'

class IssuesListContainer extends React.Component {

    componentDidMount() {
        this.props.getIssues()
    }

    render() {
        return <IssuesList issues={this.props.issues}/>
    }
}

const mapStateToProps = (state) => {
    return {
        issues: getIssuesId(state)
    }
}

export default connect(mapStateToProps, {getIssues})(IssuesListContainer)

