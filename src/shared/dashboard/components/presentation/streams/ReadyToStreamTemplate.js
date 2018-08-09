import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';

// constants
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

class ReadyToStreamTemplate extends Component {

    render() {
        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            redayToStreamWrapperStyle,
            expLabelStyle,
            numberStreamStyle,
            expTitleStyle,
            goLiveBtnStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={tableContainerStyle}>
                    <div style={tableWrapperStyle}>
                        <div style={redayToStreamWrapperStyle}>
                            <p style={expTitleStyle}>My experience 1</p>
                            <p style={expLabelStyle}>Streamed in <span style={numberStreamStyle}>0</span> other channel(s)</p>
                            <Button
                                variant="Add a new stream"
                                style={goLiveBtnStyle}
                                onClick={() => this.handleOpenModal()}
                            >Go Live</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
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
        height: 48,
        background: colors.whiteColor,
        marginBottom: 6,
        paddingLeft: 6,
        paddingRight: 6,
    },
    redayToStreamWrapperStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expTitleStyle: {
        margin: 0,
        marginLeft: 6,
        fontSize: fonts.h3
    },
    expLabelStyle: {
        margin: 0,
        fontSize: fonts.h3
    },
    numberStreamStyle: {
        fontWeight: 'bold',
        color: colors.blackColor
    },
    goLiveBtnStyle: {
        backgroundColor: colors.lightBlueColor,
        color: colors.greenColor,
        fontSize: fonts.h3,
    }
}
export default ReadyToStreamTemplate;
