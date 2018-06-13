import React, { Component } from 'react';
import Nav from '../navigation/Nav';
import links from '../config/links.js';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: false,
            navbarLinks: links.navbarLinks
        }
    }

    changePath() {
        this.setState({
            path: this.props.match.params[0]
        });
    }

    renderLinks(links) {
        return <Nav onClick={() => this.changePath()} links={links}></Nav>
    }
    renderNavBar() {
        return <Nav navbarLink links={this.state.navbarLinks} ></Nav>
    }
    masterLayout(html) {
        return (
            <div>
                {this.renderNavBar()}
                {html}
            </div>
        )
    }
}