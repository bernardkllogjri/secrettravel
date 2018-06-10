import React from 'react';       
import BaseComponent from './BaseComponent';

export default class Results extends BaseComponent{
    render(){
        return (
            <div>
                {this.renderLinks()}
                Results
            </div>
        )
    }

}