import React from 'react';
import BaseComponent from '../BaseComponent';
import GridView from '../grid/GridView';
import { Redirect } from 'react-router-dom';

export default class Channels extends BaseComponent {

    getItems() {
        let items;
        let path = this.props.match ? this.props.match.params[0]: null;
        if (path === 'other') {
            items = {
                europe: [
                    { id: 1, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 2, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 3, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 4, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 5, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 6, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                ]
            };
        } else {
            items = {
                americas: [
                    { id: 1, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 2, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 3, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 4, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 5, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 6, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 7, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 8, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 9, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                ],
                europe: [
                    { id: 1, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 2, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 3, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 4, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 5, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 6, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                ],
                asia: [
                    { id: 1, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 2, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 3, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 4, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 5, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                    { id: 6, title: "Nice", desc: "Very Nice", image: "/images/image.jpg" },
                ],
            };
        }
        return items;
    }

    renderBase() {
        return (<div>
            { this.renderNavBar()}
            <div className="container mt-5">
                <form className="form-inline mb-1">
                    <span className="title">Channels</span>
                    <div className="input-group ml-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text pr-0"><i className="fa fa-search"></i></span>
                        </div>
                        <input type="text" className="form-control pdl-5" placeholder="try 'Gold Coast'" />
                    </div>
                </form>
                {this.renderLinks([
                    { link: '/channels/places', name: "Places", active: false, exact: false },
                    { link: '/channels/other', name: "Other", active: false, exact: false },
                ])}
                <GridView
                    channel 
                    items={this.getItems()} 
                />
            </div>
        </div>)
    }
    render() {
        if (this.props.match && !this.props.match.params[0]) {
            return <Redirect to="/channels/places" />;
        }
        return this.renderBase()
    }

}