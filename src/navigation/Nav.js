import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render() {
        if (this.props.navbarLink) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <NavLink className="navbar-brand p-0 pb-2 pl-2 mr-1" to="/"><img src="/images/logo.png" width="23" alt="logo" /></NavLink>
                            <form className="form-inline mb-1">
                                <div className="input-group ml-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text pr-0"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" className="form-control pdl-5" placeholder="try 'Gold Coast'" />
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item bord-left mr-5"></li>
                                {
                                    this.props.links.map((i, j) => {
                                        return <li key={j} className="nav-item">
                                            <NavLink to={i.link} exact={i.exact} activeClassName="active" className="nav-link">{i.name}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav >
            )
        } else {
            return (
                <ul className="nav nav-tabs">
                    {
                        this.props.links.map((i, j) => {
                            return (
                                <li key={j} className="nav-item pt-3">
                                    <NavLink to={i.link} onClick={() => this.props.onClick()} exact={true} className="nav-link pt-0 pb-0" activeClassName="active">{i.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    }

}

export default Nav;