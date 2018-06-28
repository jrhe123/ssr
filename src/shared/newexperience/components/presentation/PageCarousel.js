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
            slidesToShow: 5,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
                <ThumbnailPage />
            </Slider>
        )
    }
}

export default PageCarousel;