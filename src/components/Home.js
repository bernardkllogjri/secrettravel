import React from 'react';   
import BaseComponent from './BaseComponent';    
import GridView from './grid/GridView';

export default class Home extends BaseComponent{

    render(){
        return (
            <div>
                {this.renderLinks()}
                User
                <GridView/>
            </div>
        )
    }

}