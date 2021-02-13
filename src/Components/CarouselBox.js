import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import p1 from '../assets/1.jpg';
import p2 from '../assets/2.jpg';
import p3 from '../assets/3.jpg';

class CarouselBox extends Component {

    render() {

        let clientHeight = document.documentElement.clientHeight-56;

        return (
            <Carousel interval={5000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p1}
                        height = {clientHeight}
                        alt="1"/>
                    <Carousel.Caption>
                        <h3>1</h3>
                        <p>111</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> 
                    <img
                        className="d-block w-100"
                        src={p2}
                        height = {clientHeight}
                        alt="2"/>
                    <Carousel.Caption>
                        <h3>2</h3>
                        <p>222</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p3}
                        height = {clientHeight}
                        alt="3"/>
                    <Carousel.Caption>
                        <h3>3</h3>
                        <p>333</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;