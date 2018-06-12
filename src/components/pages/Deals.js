import React from 'react';
import BaseComponent from '../BaseComponent';
import GridView from '../grid/GridView';
import { Redirect } from 'react-router-dom';

export default class Deals extends BaseComponent {

    constructor(props) {
        super(props);
        this.state.id = this.props.match.params.id;
    }

    redirectToDefaultTab() {
        if (!this.props.match.params[0]) {
            return (<Redirect to={`/deals/${this.state.id}/recent`}></Redirect>)
        }
    }

    getItems() {
        let items = [
            { id: 1, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 2, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 3, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 4, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 5, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 6, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 7, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 8, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
            { id: 9, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
        ];
        return items;
    }

    renderMobileTabs() {
        return (<div className="col-md-6">
            <div className="row border-bottom">
                <span className="title capitalize">Mobile push notifications</span>
            </div>

            <div className="container">
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6 p-2 font-weight-bold">As An Origin</div>
                            <div className="col-sm-6">
                                <ul className="nav nav-tabs border-0">
                                    <li className="nav-item"><a href="/" className="nav-link active">Off</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link">On</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6 p-2 font-weight-bold">As A Destination</div>
                            <div className="col-sm-6">
                                <ul className="nav nav-tabs border-0">
                                    <li className="nav-item"><a href="/" className="nav-link active">Off</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link">On</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    render() {
        return (
            <div>
                {this.redirectToDefaultTab()}
                {this.renderNavBar()}
                <div className="container">
                    <div className="jumbotron jumbotron-fluid" style={{background:"url('http://localhost:3000/images/image.jpg')"}}></div>
                    <div className="row">
                        <div className="col-md-6">
                            <span className="title">United Kingdom</span>
                            {this.renderLinks([
                                { link: `/deals/${this.state.id}/recent`, name: "Recent", active: false, exact: false },
                                { link: `/deals/${this.state.id}/trending`, name: "Trending", active: false, exact: false },
                            ])}
                        </div>
                        {this.renderMobileTabs()}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <GridView
                            items={this.getItems()}
                        />
                    </div>
                </div>
            </div>
        )
    }

}