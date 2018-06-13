import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class ExperiencePanel extends Component {

    state = {
        isMenuOpen: false,
    }

    render() {

        const {
            mainContainerStyle,
            optionContainerStyle,
            leftContainerStyle,
            imgStyle,
            labelStyle,
            spanLabelStyle,
            tableContainerStyle,
            tableWrapperStyle,
            rightContainerStyle,
            btnContainerStyle,
            btnStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <p style={labelStyle}>Type</p>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Select what kind of experience you would like your end user to experience?</p>
                        {/* <DropdownMenu
                            isOpen={this.state.isMenuOpen}
                            close={this.close}
                            toggle={
                                <Button style={{ position: 'relative' }} onClick={this.toggle}>
                                    open
                                </Button>
                            }
                            align='center'
                        >
                            <div><Button>Default</Button></div>
                        </DropdownMenu> */}
                    </div>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <img
                            style={imgStyle}
                            src={require('../../../../../assets/images/card_option.png')}
                        />
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={Object.assign({}, labelStyle, spanLabelStyle)}>Card</p>
                            </div>
                        </div>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Cards are the entry point to your end user's experience</p>
                    </div>
                </div>
                <div style={btnContainerStyle}>
                    <Button
                        style={btnStyle}
                        variant="Create card">
                        Create a card
                    </Button>
                </div>
                <div style={optionContainerStyle}>
                    <div style={leftContainerStyle}>
                        <img
                            style={imgStyle}
                            src={require('../../../../../assets/images/page_option.png')}
                        />
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={Object.assign({}, labelStyle, spanLabelStyle)}>Page(s)</p>
                            </div>
                        </div>
                    </div>
                    <div style={rightContainerStyle}>
                        <p>Page(s) are the follow-up screens after the end user clicked the above card.<br />Multiple page(s) are linked via sections.</p>
                    </div>
                </div>
                <div style={btnContainerStyle}>
                    <Button
                        style={btnStyle}
                        variant="Create pages">
                        Create page(s)
                    </Button>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 600,
        margin: '0 auto',
    },
    optionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 36,
    },
    leftContainerStyle: {
        flex: 1,
        color: colors.blackColor,
        fontSize: fonts.h3,
        display: 'flex',
        flexDirection: 'row'
    },
    imgStyle: {
        display: 'block'
    },
    labelStyle: {
        textAlign: 'left',
    },
    spanLabelStyle: {
        paddingLeft: 12
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    rightContainerStyle: {
        flex: 4,
        color: colors.labelColor,
        fontSize: fonts.h4
    },
    btnContainerStyle: {
        marginTop: 12,
        marginLeft: 120
    },
    btnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
        width: 132
    }
}

export default ExperiencePanel;