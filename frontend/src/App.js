import React from 'react'
import store from './redux/redux-store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './component/Header/Header'
import NavbarContainer from './component/Navbar/NavbarContainer'
import IssueContainer from './component/Issue/IssueContainer'
import IssuesListContainer from './component/IssuesList/IssuesListContainer'
import IssueCondition from './component/IssueCondition/IssueCondition'
import IssueCreatorContainer from './component/IssueCreator/IssueCreatorContainer'
import "@fontsource/roboto"

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
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
