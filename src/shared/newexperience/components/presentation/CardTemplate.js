import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

class CardTemplate extends Component {

    handleSelectCardTemplate = (template) => {
        if(this.props.isClickable)
            this.props.handleSelectCardTemplate(template)
    }

    renderCard = (template) => {

        const {
            tableContainerStyle,
            tableWrapperStyle,
            leftImageContainerStyle,
            rightTextContainerStyle,
            leftTextContainerStyle,
            rightImageContainerStyle,
            imgStyle,
            txtStyle,
            overlayContainerStyle,
            overlayWrapperStyle,
            overlayImgStyle,
            iconStyle,
        } = styles;

        let card;
        if (template.Type == 'LEFT_IMAGE_TEXT') {
            card = (
                <div>
                    <div style={leftImageContainerStyle}>
                        <img
                            style={imgStyle}
                            src={require('../../../../../assets/images/demo.jpg')}
                        />
                    </div>
                    <div style={Object.assign({}, rightTextContainerStyle, {backgroundColor: colors.lightBlueColor})}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={txtStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (template.Type == 'RIGHT_IMAGE_TEXT') {
            card = (
                <div>
                    <div style={Object.assign({}, leftTextContainerStyle, {backgroundColor: colors.lightBlueColor})}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={txtStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div style={rightImageContainerStyle}>
                        <img
                            style={imgStyle}
                            src={require('../../../../../assets/images/demo.jpg')}
                        />
                    </div>
                </div>
            );
        } else if (template.Type == 'BACKGROUND_TEXT') {
            card = (
                <div style={Object.assign({}, tableContainerStyle, { backgroundColor: colors.blueCardColor })}>
                    <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                        <p style={Object.assign({}, txtStyle, { color: colors.whiteColor })}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            );
        } else if (template.Type == 'BACKGROUND_IMAGE_TEXT') {
            card = (
                <div style={overlayContainerStyle}>
                    <img 
                        style={overlayImgStyle} 
                        src={require('../../../../../assets/images/demo.jpg')} 
                    />
                    <div style={overlayWrapperStyle}>
                        <div style={Object.assign({}, tableContainerStyle)}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                                <p style={Object.assign({}, txtStyle, { color: colors.whiteColor })}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (template.Type == 'VIDEO') {
            card = (
                <div style={overlayContainerStyle}>
                    <img 
                        style={overlayImgStyle} 
                        src={require('../../../../../assets/images/demo.jpg')} 
                    />
                    <div style={overlayWrapperStyle}>
                        <div style={Object.assign({}, tableContainerStyle)}>
                            <div style={Object.assign({}, tableWrapperStyle, { textAlign: 'center' })}>
                                <PlayCircleOutline style={Object.assign({}, iconStyle, { color: colors.whiteColor })}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (template.Type == 'IMAGE') {
            card = (
                <div style={overlayContainerStyle}>
                    <img 
                        style={overlayImgStyle} 
                        src={require('../../../../../assets/images/demo.jpg')} 
                    />
                </div>
            );
        }

        return card;
    }

    render() {

        const {
            isWithTitle,
            template,
        } = this.props;

        const {
            mainContainerStyle,
            titleContainerStyle,
            titleStyle,
            cardContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    isWithTitle ?
                    <div style={titleContainerStyle}>
                        <p style={titleStyle}>{template.Title}</p>
                    </div>
                    :
                    null
                }
                <div style={cardContainerStyle}
                    className="dx_card"
                    onClick={() => this.handleSelectCardTemplate(template)}
                    >
                    {
                        this.renderCard(template)
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
    cardContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 90,
        margin: '0 auto',
        cursor: 'pointer'
    },
    leftImageContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 90,
        height: 90,
    },
    rightTextContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 'calc(100% - 90px)',
        height: 90,
    },
    leftTextContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 'calc(100% - 90px)',
        height: 90,
    },
    rightImageContainerStyle: {
        display: 'inline-block',
        float: 'left',
        width: 90,
        height: 90,
    },
    imgStyle: {
        display: 'block',
        width: 90,
        height: 90
    },
    txtStyle: {
        fontSize: fonts.h5
    },
    overlayContainerStyle: {
        position: 'relative',
        height: 90,
        width: '100%',
    },
    overlayWrapperStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'block',
        background: 'rgba(0, 0, 0, .4)',
        zIndex: 99
    },
    overlayImgStyle: {
        height: 90,
        width: '100%',
    },
    iconStyle: {
        fontSize: '42px'
    }
}

export default CardTemplate;