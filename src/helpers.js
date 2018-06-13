import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return (
        <div className="container mt-5 loader">
            <i className="fas fa-fighter-jet fa-spin"></i>
        </div>
    )
}

const View = (page) => {
    return Loadable({
        loader: () => import(`./components/pages/${page}`),
        loading: Loading
    });
}

export { Loading, View };