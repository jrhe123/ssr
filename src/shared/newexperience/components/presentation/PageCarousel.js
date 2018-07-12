import React, { Component } from 'react';

// components
import ThumbnailPage from './ThumbnailPage';

// Libraries
import Slider from "react-slick";

const displayNumber = 5;

class PageCarousel extends Component {

    render() {

        const {
            experience,
        } = this.props;
        const {
            pages,
            newPage,
        } = experience;

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
                                    page={page}
                                    handleClickActivePage={() => this.props.handleClickActivePage(page.pageGUID)}
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
                                    page={page}
                                    handleClickActivePage={() => this.props.handleClickActivePage(page.pageGUID)}
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