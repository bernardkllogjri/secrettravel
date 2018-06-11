import React, { Component } from 'react';
import GridItem from './GridItem';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min.js';


export default class GridView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        window.sr =ScrollReveal();
    }

    componentDidMount() {
        window.sr.reveal('.card',{distance:'70px',duration:600,origin:'bottom',scale:0});
    }

    componentWillMount() {
        let items = [
            { id: 1, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 2, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 3, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 5, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 6, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 7, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 8, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 9, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 10, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 11, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 12, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 13, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 14, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 15, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 16, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 17, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 18, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 19, title: "Nice", desc: "Very Nice", image: "/images/image.png" },
            { id: 20, title: "Nice", desc: "Very Nice", image: "/images/image.png" },

        ];
        this.setState({
            items
        });
    }

    render() {

        return (
            <div className="row container">
                {this.state.items.map(i => {
                    return <GridItem
                        key={i.id}
                        desc={i.desc}
                        image={i.image}
                    />
                })}
            </div>
        )
    }
}