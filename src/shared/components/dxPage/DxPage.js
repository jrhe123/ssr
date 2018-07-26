import React, { Component } from 'react';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// components
import DxModal from '../dxModal/DxModal';

// Libraries
import Button from '@material-ui/core/Button';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';
import ThumbnailPhoneElement from './ThumbnailPhoneElement';

class DxPage extends Component {

    state = {
        isMenuOpen: false,
        isModalOpen: false,
    }

    handleToggleBurger = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    handleMenuClose = () => {
        this.setState({ isMenuOpen: false });
    }

    handleRemovePagePagesClick = () => {
        this.setState({ isModalOpen: true });
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    handleRemovePagePages = () => {
        this.handleCloseModal();
        this.props.handleRemovePagePages();
    }

    renderPhoneElementSection = () => {

        const {
            pages
        } = this.props;

        let page = this.findRootPage(pages);
        let sections = page.Sections;

        const {
            elemContainerStyle,
        } = styles;

        let section = sections.map((section, i) => {
            return (
                <div className={!section.IsDeleted ? 'dx_show' : 'dx_hidden'}
                    style={elemContainerStyle}>
                    <ThumbnailPhoneElement
                        key={i}
                        section={section}
                        pdfWidth={276}
                        splashSize="MEDIUM"
                        videoSize="MEDIUM"
                        imgSize="MEDIUM"
                    />
                </div>
            )
        })
        return section;
    }

    findRootPage = (pages) => {
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            if (page.IsRoot && !page.IsDeleted) {
                return page;
            }
        }
        return null; l
    }

    findPageNumber = (pages) => {

        let pageNo = 0;
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            if (page.IsDeleted == false) {
                pageNo++;
            }
        }
        return pageNo;

    }

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            topControlContainerStyle,
            pageNumberContainerStyle,
            pageNumberTitleStyle,
            contentContainerStyle,
            contentWrapperStyle,
            controlContainerStyle,
            pageNameContainerStyle,
            pageTitleContainerStyle,
            pageTitleStyle,
            pageEditContainerStyle,
            pageEditBurgerContainerStyle,
            editBurgerStyle,
        } = styles;
        const {
            pages,
            isWithBottomBar,
        } = this.props;

        let page = this.findRootPage(pages);
        let pageNumber = this.findPageNumber(pages);

        return (
            <div style={mainContainerStyle}>

                <div style={topControlContainerStyle}>
                    <div style={tableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div style={pageNumberContainerStyle}>
                                <p style={pageNumberTitleStyle}>{pageNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={contentContainerStyle}>
                    <div style={contentWrapperStyle}>
                        {this.renderPhoneElementSection()}
                    </div>
                </div>
                {
                    isWithBottomBar ?
                        <div style={controlContainerStyle}
                            className="dx_card_bottom_bar">
                            <div style={pageNameContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <div style={pageTitleContainerStyle}>
                                            <p style={pageTitleStyle}>{page.Title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={pageEditContainerStyle}>
                                <div style={pageEditBurgerContainerStyle}>
                                    <DropdownMenu
                                        className="dx_card_template_bottom_bar_menu"
                                        isOpen={this.state.isMenuOpen}
                                        close={() => this.handleMenuClose()}
                                        toggle={
                                            <MoreHoriz
                                                onClick={() => this.handleToggleBurger()}
                                                style={editBurgerStyle} />
                                        }
                                        align='right'
                                        closeOnInsideClick={false}
                                    >
                                        <Button onClick={() => this.props.handleEditPagePagesClick()}>Edit</Button>
                                        <Button onClick={() => this.handleRemovePagePagesClick()}>Remove</Button>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                <DxModal
                    open={this.state.isModalOpen}
                    title="Confirm Delete Pages"
                    description="Do you want to proceed?"
                    cancel={true}
                    confirm={true}
                    isDanger={true}
                    handleConfirm={() => this.handleRemovePagePages()}
                    onCloseModal={() => this.handleCloseModal()}
                />
            </div>
        )
    }
}

const styles = {

    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    mainContainerStyle: {
        width: 276,
        height: 330,
        position: 'relative',
        boxSizing: 'border-box',
    },
    topControlContainerStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: 48,
        width: 48,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 99,
    },
    pageNumberContainerStyle: {
        textAlign: 'center'
    },
    pageNumberTitleStyle: {
        color: colors.whiteColor,
        fontSize: fonts.h3
    },
    contentContainerStyle: {
        height: 'calc(100% - 30px)',
        backgroundColor: colors.lightBlueColor,
        padding: 9
    },
    contentWrapperStyle: {
        height: '100%',
        overflow: 'hidden'
    },
    elemContainerStyle: {
        width: '100%',
        backgroundColor: colors.whiteColor,
        overflow: 'hidden'
    },
    controlContainerStyle: {
        width: '100%',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.whiteColor,
    },
    pageNameContainerStyle: {
        flex: 1
    },
    pageTitleContainerStyle: {
        marginLeft: 6
    },
    pageTitleStyle: {
        margin: 0,
        fontSize: fonts.h3,
        width: 180,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    pageEditContainerStyle: {
        flex: '30px 0 0',
        position: 'relative'
    },
    pageEditBurgerContainerStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 30,
        width: 30,
    },
    editBurgerStyle: {
        fontSize: 30,
        cursor: 'pointer'
    },
}

export default DxPage;