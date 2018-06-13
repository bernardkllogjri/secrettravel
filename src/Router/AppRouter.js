import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {View} from '../helpers';
import routes from '../config/routes'

export default () => {
    return (
        <Router>
            <Switch>
                {routes.map((route,i) => {
                    return (<Route key={i} path={route.path} exact={route.exact} component={View(route.view)}/>)
                })}
                <Route component={View('NotFound')} />
            </Switch>
        </Router>
    )
}