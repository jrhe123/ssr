import React, { Component } from 'react';

// Libraries
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class DxButtonConnector extends Component {

    render() {

        const {
            mainContainerStyle,
            mainWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,
            contentContainerStyle,
            leftContentContainerStyle,
            btnLabelStyle,
            rightIconContainerStyle,
            expandIconStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={mainWrapperStyle}>
                    <div style={contentContainerStyle}>
                        <div style={leftContentContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <p style={btnLabelStyle}>{this.props.btnContent}</p>
                                </div>
                            </div>
                        </div>
                        <div style={rightIconContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <KeyboardArrowRight style={expandIconStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.greyColor,
    },
    mainWrapperStyle: {
        flex: 1,
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
    },
    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
    },
    leftContentContainerStyle: {
        flex: 1,
        padding: '6px 12px'
    },
    btnLabelStyle: {
        margin: 0,
        fontSize: fonts.h4
    },
    rightIconContainerStyle: {
        flex: '18px 0 0',
    },
    expandIconStyle: {
        paddingRight: 6,
        fontSize: 24,
        float: 'right'
    },
}

export default DxButtonConnector;