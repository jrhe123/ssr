import React, { Component } from 'react';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ThumbnailPage extends Component{

    render(){

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

        return(
            <div style={mainContainerStyle}>
                <div style={contentContainerStyle}></div>
                <div style={titleContainerStyle}>
                    <p style={Object.assign({}, titleStyle, {color: active ? colors.greenColor : colors.whiteColor})}>
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