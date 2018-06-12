import React from 'react';   
import BaseComponent from '../BaseComponent';    

export default class Home extends BaseComponent{

    render(){
        return (
            <div>
                {this.renderNavBar()}
                <div className="container mt-5 loader">
                    <div>404 Not found !</div><br />
                    <i className="fas fa-fighter-jet fa-spin"></i>
                </div>
            </div>
        )
    }

}