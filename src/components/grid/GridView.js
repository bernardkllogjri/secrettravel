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

    renderChannelResults() {
        let result = [];
        let i = 0;

        for (let arr in this.props.items) {
            result.push(
                <div key={i} className="row pos-relative mt-5">
                    <div className="channel-title absolute container">{arr}</div>
                    {this.props.items[arr].map((i,j) => {
                        return (
                            <GridItem
                                channelGrid={this.props.channel || false}
                                key={j}
                                desc={i.desc}
                                image={i.image}
                                title={i.title}
                                id={i.id}
                            />)
                    })
                    }
                </div>
            );
            i++;
        }
        return result;
    }

    renderDealsResults() {
        return this.props.items.map(i => {
            return (<GridItem
                channelGrid={this.props.channel || false}
                key={i.id}
                desc={i.desc}
                image={i.image}
                title={i.title}
                id={i.id}
            />)
        })
    }

    render() {
        return this.props.channel || false ? this.renderChannelResults() : this.renderDealsResults()
    }

}