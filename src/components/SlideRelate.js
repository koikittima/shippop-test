import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';



function SlideRelate({ }) {
    return (
        <div id="main-slider" className="no-margin">
            <Carousel controls={true} indicators={true}>
                <Carousel.Item>
                    <img className="" src={"/svg/imgtest.svg"} />
                </Carousel.Item>
                <Carousel.Item >
                    <img className="" src={"/svg/imgtest.svg"} />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default SlideRelate
