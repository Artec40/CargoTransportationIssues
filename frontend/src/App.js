import React from 'react'
import './App.css'
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from '../src/Header/Header'
import Navbar from '../src/Navbar/Navbar'
import Issue from './Issue/Issue'
import IssuesListContainer from './IssuesList/IssuesListContainer'

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Issue/>
            <IssuesListContainer/>
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
