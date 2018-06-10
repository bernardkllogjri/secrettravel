import React,{Component} from 'react';
import Nav from '../navigation/Nav';

export default class User extends Component{

    render(){
        return (
            <div>
                <Nav links={[
                    {link:'/',name:"Home",active:false},
                    {link:'/user',name:"User",active:true},
                ]} ></Nav>
                User
            </div>
        )
    }

}