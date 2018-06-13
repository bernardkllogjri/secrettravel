import React from 'react';
import BaseComponent from '../BaseComponent';
import Channels from '../pages/Channels';
import Deals from '../pages/Deals';

export default class Home extends BaseComponent {
    render() {
        return (
            this.masterLayout(
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <Deals homepage />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <Channels
                                    channel
                                    homepage
                                    url="/url"
                                />
                            </div>
                        </div>
                    </div>
                </div >
            )
        )
    }
}