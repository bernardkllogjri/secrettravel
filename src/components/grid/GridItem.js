import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class GridItem extends Component {

    renderDealsCard() {
        return (
            <div className={`card col-md-${this.props.colsNum || 4} border-0 mt-3`}>
                <img className="card-img-top" src={this.props.image} alt="card" />
                <div className="card-body p-0 mb-2 border-bottom border-left border-right">
                    <p className="card-text p-1 m-0">
                        <NavLink to={`/deal/${this.props.id}`} className="nav-link p-0 font-weight-bold font-13">
                            United Kingdom <i className="fa fa-angle-right" /> {this.props.title} <span className="float-right">$233</span>
                        </NavLink>
                    </p>
                    <span className="text-center">
                        <p className="card-text p-1 font-10 font-weight-bold">
                            <i className="fa fa-arrow-up" />
                            <i className="fa fa-arrow-down" /> <span className="p-0 pr-3"> roundtrip </span>
                            <i className="fa fa-window-minimize" /> <span className="p-0 pr-4"> 1 stop</span>
                            <i className="fa fa-clock" /><span className="p-0 pr-4">Nov 2018 - Jun 2019</span>
                            <span className="p-0">23% savings</span>
                        </p>
                    </span>
                </div>
            </div>
        )
    }

    linkWrapper(html) {
        return (<NavLink to={`/deals/${this.props.id}`}>
            {html}
        </NavLink>)
    }

    renderChannelCard() {
        const html = (
            <div>
                <img className="card-img" src={this.props.image} width="50" alt="card" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-white">{this.props.title}</h5>
                </div>
            </div>
        )
        return (
            <div className={`card col-md-${this.props.colsNum || 4} border-0 mt-3 text-white text-center`}>
                {this.props.id ? this.linkWrapper(html): html}
            </div>
            )
        }
    
    render() {
        return this.props.channelGrid ? this.renderChannelCard() : this.renderDealsCard();
            }
        
}