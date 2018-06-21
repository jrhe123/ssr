import React, { Component } from 'react';

class PageTemplate extends Component {

    render() {

        const {
            template,
        } = this.props;

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                template here 123
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        marginBottom: 24
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
        paddingLeft: 6,
        paddingRight: 6
    },
    titleContainerStyle: {
        marginBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    titleStyle: {
        fontSize: fonts.h4,
        marginBottom: 0
    },
    pageContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 90,
        cursor: 'pointer'
    },
}

export default PageTemplate;