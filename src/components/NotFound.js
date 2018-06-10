import React,{Component} from 'react';
import Nav from '../navigation/Nav';

export default class NotFound extends Component{

    render(){
        return (
            <div>
                <Nav links={[
                    {link:'/user',name:"User"},
                    {link:'/',name:"Home"}
                ]} ></Nav>
                NotFound
            </div>
        )
    }

}