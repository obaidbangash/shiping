import React from 'react'
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
function Container() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </Router>
        </>
    )
}

export default Container
