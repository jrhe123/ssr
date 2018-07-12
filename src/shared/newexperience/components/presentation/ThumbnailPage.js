import React, { Component } from 'react';

// components
import ThumbnailPhoneElement from './ThumbnailPhoneElement';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ThumbnailPage extends Component {

    renderPhoneElementSection = () => {
        const {
            sections,
        } = this.props.page;
        const {
            elemContainerStyle,
        } = styles;

        let section = sections.map((section, i) => {
            return (
                <div style={elemContainerStyle}>
                    <ThumbnailPhoneElement
                        key={i}
                        section={section}
                    />
                </div>
            )
        })
        return section;
    }

    render() {

        const {
            mainContainerStyle,
            contentContainerStyle,
            titleContainerStyle,
            titleStyle,
        } = styles;

        const {
            active,
            title,
        } = this.props;

        return (
            <div
                style={mainContainerStyle}
                onClick={() => this.props.handleClickActivePage()}
            >
                <div style={contentContainerStyle}>
                    {this.renderPhoneElementSection()}
                </div>
                <div style={titleContainerStyle}>
                    <p style={Object.assign({}, titleStyle, { color: active ? colors.greenColor : colors.whiteColor })}>
                        {title}
                    </p>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 180,
        width: 120,
        marginLeft: 12,
        marginRight: 12,
    },
    contentContainerStyle: {
        backgroundColor: colors.whiteColor,
        height: 156,
        width: 120,
        overflow: 'hidden'
    },
    elemContainerStyle: {
        maxHeight: 156,  
        width: 120, 
        overflow: 'hidden'
    },
    titleContainerStyle: {
        height: 24,
        width: 120,
    },
    titleStyle: {
        fontSize: fonts.h5,
        textAlign: 'center',
        margin: 0
    },
}

export default ThumbnailPage;