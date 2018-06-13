import React from 'react';
import BaseComponent from '../BaseComponent';
import GridItem from '../grid/GridItem';
import Calendar from '../Calendar';

export default class Deal extends BaseComponent {

    constructor(props) {
        super(props);
        this.state.deal = this.getItem();
        this.state.comments = this.getDealInteractivity();
        this.state.related = this.getItems();
        this.state.calendar='hidden';
    }

    getItems() {
        return [
            { id: 1, image: '/images/image.jpg', title: 'London Uk' },
            { id: 2, image: '/images/image.jpg', title: 'London Uk' },
            { id: 3, image: '/images/image.jpg', title: 'London Uk' }
        ]
    }

    getItem() {
        return {
            id: 1,
            name: 'San Francisco USA',
            price: '$650',
            channel: 'London Uk',
            origins: 'London United Kingdom',
            destinations: 'San Francisco, USA',
            stops: 'Honolulu USA',
            image: '/images/image.jpg',
            desc: 'Incididunt et ad ea amet officia tempor deserunt. Occaecat sit enim et aliqua nisi incididunt exercitation deserunt qui tempor non commodo. Ea occaecat ullamco sit ipsum commodo proident ea eu fugiat nulla elit excepteur occaecat in.'
        }
    }
    getDealInteractivity() {
        return [
            { username: 'blake_waldron', comment: 'Comment' },
            { username: 'blake_waldron', comment: 'Comment' },
            { username: 'blake_waldron', comment: 'Comment' },
        ]
    }

    renderComments() {
        return (
            <div className="row">
                {this.state.comments.map((comment, j) => {
                    return (
                        <div key={j} className="col-sm-12">
                            <span className="username">{comment.username}</span>
                            <span className="comment">{comment.comment}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderActivity() {
        return (<div className="row">
            <div className="col-sm-6">
                <i className="far fa-heart" />
                <i className="far fa-comment" />
                <i className="fas fa-share" />
                View all comments
                {this.renderComments()}
                <input className="form-control form-control-sm borderless" type="text" placeholder="Add a comment..." />
            </div>
        </div>)
    }

    renderRelated() {
        return (
            <div className="row">
                {this.state.related.map((item, j) => {
                    return (<GridItem
                        key={j}
                        image={item.image}
                        title={item.title}
                        id={item.id}
                    />
                    )
                })}
            </div>
        )

    }

    openCalendar() {
        this.setState({
            calendar:this.state.calendar === 'visible' ? 'hidden':'visible'
        })
    }

    renderDeal() {
        return (
            <div className="col-sm-6 text-center">
                <GridItem
                    channelGrid
                    image={this.state.deal.image}
                    colsNum={12}
                />
                <div className="container">
                    <div className={`calendar ${this.state.calendar}`}><Calendar /></div>
                    <div className="row">
                        <div className="col-sm-6 pr-0">
                            <button type="button" className="deal-btn btn btn-outline-secondary font-13 btn-lg btn-block">
                                <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;
                            <i className="fab fa-twitter"></i>&nbsp;&nbsp;
                            <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                            <i className="fas fa-code"></i>&nbsp;&nbsp;
                            <i className="fas fa-ellipsis-h"></i>&nbsp;&nbsp;
                            </button>
                        </div>
                        <div className="col-sm-6 pl-0">
                            <button type="button" className="deal-btn btn btn-primary btn-lg font-13 btn-block" onClick={() => this.openCalendar()}>Go to deal</button>
                        </div>
                    </div>
                </div>
                <span className="text-muted m-3">Prices may vary on dates selected & the deals age</span>
            </div>
        )
    }

    render() {
        console.log('entered');
        return this.masterLayout(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-md-6">London, Uk</div>
                            <div className="col-md-6 text-right">{this.state.deal.price}</div>
                        </div>
                        <div className="row">
                            <span className="text-center w-100">
                                <p className="card-text p-1 font-weight-bold">
                                    <i className="fa fa-arrow-up" />
                                    <i className="fa fa-arrow-down" /> <span className="p-0 pr-3"> roundtrip </span>
                                    <i className="fa fa-window-minimize" /> <span className="p-0 pr-4"> 1 stop</span>
                                    <i className="fa fa-clock" /><span className="p-0 pr-4">Nov 2018 - Jun 2019</span>
                                    <span className="p-0">23% savings</span>
                                </p>
                            </span>
                        </div>
                        <p className="description">
                            {this.state.deal.desc}
                        </p>
                        <div className="title">Origin</div>
                        <p>{this.state.deal.origins}</p>
                        <div className="title">destinations</div>
                        <p>{this.state.deal.destinations}</p>
                        <div className="title">Stops</div>
                        <p>{this.state.deal.stops}</p>
                    </div>
                    {this.renderDeal()}
                </div>
                {this.renderActivity()}
                {this.renderRelated()}
            </div>
        );
    }

}