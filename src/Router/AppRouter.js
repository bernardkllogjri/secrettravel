import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading..</div>

const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: Loading
})

const Results = Loadable({
    loader: () => import('../components/Results.js'),
    loading: Loading
})

const NotFound = Loadable({
    loader: () => import('../components/NotFound'),
    loading: Loading
})


export default () => {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/results" exact component={Results} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        ) 
}