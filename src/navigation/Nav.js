import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component{

    render(){
        return (
        <ul className="nav nav-tabs">
            {
                this.props.links.map((i,j) => {
                    return (
                        <li key={j} className="nav-item">
                            <NavLink to={i.link} exact className="nav-link" activeClassName="active">{i.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        )
    }

}

export default Nav;