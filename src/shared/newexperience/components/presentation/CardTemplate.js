import React, { Component } from 'react';

// constants
import fonts from '../../../styles/fonts';

class CardTemplate extends Component{

    render(){

        const {
            mainContainerStyle,
            titleContainerStyle,
            titleStyle,
            cardContainerStyle,
        } = styles;

        return(
            <div style={mainContainerStyle}>
                <div style={titleContainerStyle}>
                    <p style={titleStyle}>Left image with text</p>
                </div>
                <div style={cardContainerStyle}></div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        marginBottom: 24
    },
    titleContainerStyle: {
        marginBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
    },
    titleStyle: {
        fontSize: fonts.h4
    },
    cardContainerStyle: {
        width: 'calc(100% - 24px)',
        height: 90,
        margin: '0 auto',
        border: '1px solid red'
    },
}

export default CardTemplate;