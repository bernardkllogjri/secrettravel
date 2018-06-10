import React,{Component} from 'react';

export default class GridItem extends Component{

    render(){
        return (
            <div className="card col-sm-4 border-0">
                <img className="card-img-top" src={this.props.image} alt="card" />
                <div className="card-body p-0 pt-3 mb-2 border-bottom border-left border-right">
                    <p className="card-text">{this.props.desc}</p>
                </div>
            </div>
        )
    }

}