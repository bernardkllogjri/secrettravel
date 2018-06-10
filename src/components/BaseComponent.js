import React,{Component} from 'react';
import Nav from '../navigation/Nav';
import links from '../config/links.js';        

export default class Results extends Component{
    constructor(props){
        super(props);
        this.state = {
            links:[]
        }
    }

    componentWillMount(){
        let mutatedLinks = links.links.map(element => {
            if(element.name==="Home"){
                element.active = true;
            }
            return element;
        });
        this.setState({links:mutatedLinks});
    }

    renderLinks(){
        return <Nav links={this.state.links} ></Nav>
    }
}