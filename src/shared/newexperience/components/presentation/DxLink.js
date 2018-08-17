import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class DxLink extends Component {

    render() {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            hyperLinkLabelStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={tableContainerStyle}>
                    <div style={tableWrapperStyle}>
                        <p style={hyperLinkLabelStyle}>https://wooooo</p>
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
        height: 72,
        cursor: 'default',
    },
    hyperLinkLabelStyle: {
        margin: 0,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: fonts.h3,
        color: colors.blueColor,
        textDecoration: 'underline',
        cursor: 'pointer'
    },
}

export default DxLink;