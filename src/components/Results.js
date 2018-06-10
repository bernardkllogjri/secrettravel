import React,{Component} from 'react';
import Nav from '../navigation/Nav';

export default class Results extends Component{

    render(){
        return (
            <div>
                <Nav links={[
                    {link:'/',name:"Home",active:true},
                    {link:'/user',name:"User",active:false},
                ]} ></Nav>
                Results
            </div>
        )
    }

}