import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class PageTemplate extends Component {

    renderPage = (template) => {
        return (
            <div>page here</div>
        )
    }

    render() {

        const {
            template,
        } = this.props;

        const {
            mainContainerStyle,
            pageContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={pageContainerStyle}>
                    {
                        this.renderPage(template)
                    }
                </div>
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
        textAlign: 'center',
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
        margin: '0 auto',
        cursor: 'pointer'
    },
}

export default PageTemplate;