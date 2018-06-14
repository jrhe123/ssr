import React, { Component } from 'react';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class CardTemplate extends Component {

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
                    <div style={rightTextContainerStyle}>
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
                    <div style={leftTextContainerStyle}>
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
        }

        return card;
    }

    render() {

        const {
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
                <div style={titleContainerStyle}>
                    <p style={titleStyle}>{template.Title}</p>
                </div>
                <div style={cardContainerStyle}>
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
        background: colors.lightBlueColor,
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
}

export default CardTemplate;