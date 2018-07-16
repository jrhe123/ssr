import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

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

    renderPhoneElementSection = () => {
        const {
            sections,
        } = this.props.page;
        const {
            elemContainerStyle,
        } = styles;

        let section = sections.map((section, i) => {
            return (
                <div className={!section.isDeleted ? 'dx_show' : 'dx_hidden'} 
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

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            topControlContainerStyle,
            pageNumberContainerStyle,
            pageNumberTitleStyle,
            contentContainerStyle,
            controlContainerStyle,
            pageNameContainerStyle,
            pageTitleContainerStyle,
            pageTitleStyle,
            pageEditContainerStyle,
            pageEditBurgerContainerStyle,
            editBurgerStyle,
        } = styles;
        const {
            pageNumber,
            page,
        } = this.props;

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
                    {this.renderPhoneElementSection()}
                </div>
                <div style={controlContainerStyle}
                    className="dx_card_bottom_bar">
                    <div style={pageNameContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <div style={pageTitleContainerStyle}>
                                    <p style={pageTitleStyle}>{page.title}</p>
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
                                <Button onClick={() => this.props.handleEditCardTemplateClick()}>Edit</Button>
                                <Button onClick={() => this.handleRemoveCardTemplateClick()}>Remove</Button>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
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
        padding: 9,
        backgroundColor: colors.lightBlueColor
    },
    elemContainerStyle: {
        height: 300,  
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