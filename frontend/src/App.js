import React from 'react'
import './App.css'
import store from './redux/redux-store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from '../src/Header/Header'
import Navbar from '../src/Navbar/Navbar'
import IssueContainer from './Issue/IssueContainer'
import IssuesListContainer from './IssuesList/IssuesListContainer'
import IssueCondition from './IssueCondition/IssueCondition'
import IssueCreatorContainer from './IssueCreator/IssueCreatorContainer'

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <IssuesListContainer/>
            <Switch>
                <Route path={'/issue/:issueId?'} render={() => <IssueContainer/>}/>
                <Route path={'/create'} render={() => <IssueCreatorContainer/>}/>
                <Route path={'*'} render={() => <IssueCondition condition={'startApp'}/>}/>
            </Switch>
        </div>
    )
}

const MyApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default MyApp
