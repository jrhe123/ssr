import React, { Component } from 'react';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ThumbnailPage extends Component{

    render(){

        const {
            mainContainerStyle,
        } = styles;

        return(
            <div style={mainContainerStyle}>
                page here
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 180,
        width: 120,
        backgroundColor: colors.whiteColor,
        marginLeft: 12,
        marginRight: 12,
    },
}

export default ThumbnailPage;