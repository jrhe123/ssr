import React, { Component } from 'react';

// components
import ThumbnailPage from './ThumbnailPage';

// Libraries
import Slider from "react-slick";

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class PageCarousel extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Slider>
        )
    }
}

export default PageCarousel;