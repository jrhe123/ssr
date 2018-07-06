import React, { Component } from 'react';

// Libraries
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// components
import DxInput from '../../../components/dxInput/DxInput';

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

            connectorListContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>

                <div style={mainWrapperStyle}>
                    <div style={contentContainerStyle}>
                        <div style={leftContentContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <DxInput
                                        style={btnLabelStyle}
                                        placeholder="Text for a button"
                                        handleValChange={(e) => this.props.handleBtnInputChange(e)}
                                        isTransparent={true}
                                        width="264px"
                                        disabled={false}
                                        value={this.props.btnContent}
                                    />
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

                <div style={connectorListContainerStyle}></div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        position: 'relative',
        height: 72,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.greyColor,
        cursor: 'pointer',
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
    },
    btnLabelStyle: {
        fontSize: fonts.h3
    },
    rightIconContainerStyle: {
        flex: '18px 0 0',
    },
    expandIconStyle: {
        paddingRight: 6,
        fontSize: 24,
        float: 'right',
    },
    connectorListContainerStyle: {
        position: 'absolute',
        top: 0,
        right: -144,
        height: 72,
        width: 120,
    },
}

export default DxButtonConnector;