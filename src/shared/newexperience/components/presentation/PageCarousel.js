import React, { Component } from 'react';

// components
import ThumbnailPage from './ThumbnailPage';

// Libraries
import Slider from "react-slick";

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const displayNumber = 5;

class PageCarousel extends Component {

    render() {

        const {
            pages,
            newPage,
        } = this.props;

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: displayNumber,
            slidesToScroll: displayNumber
        };

        const {
            mainContainerStyle
        } = styles;

        return (
            (pages.length > displayNumber) ?
                (
                    <Slider {...settings}>
                        {
                            pages.map((page, index) => (
                                <ThumbnailPage
                                    key={index}
                                    title={page.title}
                                    active={page.pageGUID == newPage.pageGUID ? true : false}
                                />
                            ))
                        }
                    </Slider>
                )
                :
                (
                    <div style={mainContainerStyle}>
                        {
                            pages.map((page, index) => (
                                <ThumbnailPage
                                    key={index}
                                    title={page.title}
                                    active={page.pageGUID == newPage.pageGUID ? true : false}
                                />
                            ))
                        }
                    </div>
                )
        )
    }
}

const styles ={

    mainContainerStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
}

export default PageCarousel;