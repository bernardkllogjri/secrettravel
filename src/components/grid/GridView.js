import React,{Component} from 'react';
import GridItem from './GridItem';

export default class GridView extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }

    componentWillMount(){
        let items = [
            {id:1,title:"Nice",desc:"Very Nice",image:"/images/image.png"},
            {id:2,title:"Nice",desc:"Very Nice",image:"/images/image.png"},
            {id:3,title:"Nice",desc:"Very Nice",image:"/images/image.png"},
            {id:4,title:"Nice",desc:"Very Nice",image:"/images/image.png"},
        ];
        this.setState({
            items
        });
    }

    render(){

        return (
            <div className="row container">
                {
                    this.state.items.map(i => {
                        return <GridItem
                            key={i.id}                                     
                            desc={i.desc}
                            image={i.image}
                        />
                    })                    
                }
            </div>
        )
    }

}