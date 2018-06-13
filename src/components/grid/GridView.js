import React, { Component } from 'react';
import GridItem from './GridItem';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min.js';

export default class GridView extends Component {

    constructor(props) {
        super(props);
        window.sr = ScrollReveal();
    }

    animate() {
        let elements = ['.card', '.jumbotron'];
        elements.forEach(el => {
            window.sr.reveal(el, {
                duration: 600,
                origin: 'bottom',
                scale: 1,
            })
        })
    }

    componentDidMount() {
        this.animate();
    }

    componentDidUpdate() {
        this.animate();
    }

    renderChannelCards() {
        let result = [];
        let i = 0;

        for (let arr in this.props.items) {
            result.push(
                <div key={i} className="row pos-relative mt-5">
                    <div className="channel-title absolute container">{arr}</div>
                    {this.renderCards(this.props.items[arr])}
                </div>
            );
            i++;
        }
        return result;
    }

    renderCards(items){
        return items.map((i,j) => {
            return (<GridItem
                channelGrid={this.props.channel || this.props.homepage}
                key={j}
                desc={i.desc}
                image={i.image}
                title={i.title}
                id={i.id}
                colsNum={12 / this.props.cols}
            />)
        })
    }

    render() {
        return this.props.channel ? this.renderChannelCards() : this.renderCards(this.props.items)
    }

}