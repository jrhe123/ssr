import React, { Component } from 'react';

// components
import ThumbnailPage from './ThumbnailPage';
import DxModal from './DxModal';

// Libraries
import Slider from "react-slick";

const displayNumber = 5;

class PageCarousel extends Component {

    state = {
        isModalOpen: false,
        targetPage: null,
    }

    handleDeletePage = (pageGUID) => {
        this.setState({
            isModalOpen: true,
            pageGUID: pageGUID
        });
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    handleConfirmDeleteCarouselPage = () => {
        const {
            pageGUID
        } = this.state;
        this.props.handleConfirmDeleteCarouselPage(pageGUID);
    }

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
            <div>
                {
                    pages.length > displayNumber ?
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
                                            handleDeletePage={() => this.handleDeletePage(page.pageGUID)}
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
                                            handleDeletePage={() => this.handleDeletePage(page.pageGUID)}
                                        />
                                    ))
                                }
                            </div>
                        )
                }
                <DxModal
                    open={this.state.isModalOpen}
                    title="Confirm Delete Page"
                    description="Do you want to proceed?"
                    cancel={true}
                    confirm={true}
                    handleConfirm={() => this.handleConfirmDeleteCarouselPage()}
                    onCloseModal={() => this.handleCloseModal()}
                />
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'default'
    },
}

export default PageCarousel;