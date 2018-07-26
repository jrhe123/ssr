import React, { Component } from 'react';

// components
import ThumbnailPhoneElement from './ThumbnailPhoneElement';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ThumbnailPage extends Component {

    renderPhoneElementSection = () => {
        const {
            Sections,
        } = this.props.page;
        const {
            elemContainerStyle,
        } = styles;

        let section = Sections.map((section, i) => {
            return (
                <div className={!section.IsDeleted ? 'dx_show' : 'dx_hidden'} 
                    style={elemContainerStyle}>
                    <ThumbnailPhoneElement
                        key={i}
                        section={section}
                        pdfWidth={120}
                        splashSize="SMALL"
                        videoSize="SMALL"
                        imgSize="SMALL"
                    />
                </div>
            )
        })
        return section;
    }

    render() {

        const {
            mainContainerStyle,
            closeContainerStyle,
            closeIconStyle,
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
                <div 
                    className="dx_hover_btn"
                    style={closeContainerStyle}
                    onClick={() => this.props.handleDeletePage()}
                >
                    <img 
                        style={closeIconStyle}
                        src={require('../../../../../assets/images/close_button.png')}/>
                </div>
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
        position: 'relative',
        height: 180,
        width: 120,
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
        cursor: 'pointer',
    },
    closeContainerStyle: {
        position: 'absolute',
        right: -9,
        top: -9,
        width: 18,
        height: 18,
        zIndex: 99,
        borderRadius: '50%',
        cursor: 'pointer'
    },
    closeIconStyle: {
        display: 'block',
        height: 18,
        width: 18
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