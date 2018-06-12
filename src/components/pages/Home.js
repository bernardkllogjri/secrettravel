import React from 'react';
import BaseComponent from '../BaseComponent';
import Channels from '../pages/Channels';

export default class Home extends BaseComponent {
    render() {
        return (
            <div>
                <Channels
                    form={false}
                 />
            </div>
        )
    }
}