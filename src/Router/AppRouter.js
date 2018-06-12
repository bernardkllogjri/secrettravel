import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => {
    return (
    <div className="container mt-5 loader">
        <div>404 Not found !</div><br />
        <i className="fas fa-fighter-jet fa-spin"></i>
    </div>
    )
}

const pages = ['Channels','Deals','Home','NotFound']
const components = [];

pages.forEach((page,i) => {
    components[pages[i]] = Loadable({
            loader: () => import(`../components/pages/${page}`),
            loading: Loading
        });
})

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={components['Home']} />
                <Route path="/deals/:id" exact component={components['Deals']} />
                <Route path="/deals/:id/*" exact component={components['Deals']} />
                <Route path="/channels" exact component={components['Channels']} />
                <Route path="/channels/*" component={components['Channels']} />
                <Route component={components['NotFound']} />
            </Switch>
        </Router>
    )
}