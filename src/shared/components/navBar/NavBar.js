import React, { Component } from 'react';

// Libraries
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

// constants
import colors from '../../styles/colors';

// router
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {

        const {
            mainContainerStyle,

            leftContainerStyle,
            imageContainerStyle,
            imageWrapperStyle,
            imageStyle,

            middleContainerStyle,
            rightContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={leftContainerStyle}>
                    <div style={imageContainerStyle}>
                        <div style={imageWrapperStyle}>
                            <img 
                                style={imageStyle}
                                src={require('../../../../assets/images/logo.jpeg')} />
                        </div>
                    </div>
                </div>
                <div style={middleContainerStyle}>1</div>
                <div style={rightContainerStyle}>1</div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: 90,
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderBottom: '1px solid',
        borderColor: colors.borderColor,
    },
    leftContainerStyle: {
        display: 'inline-block',
        height: 90,
        width: 180,
        float: 'left',
    },
    imageContainerStyle: {
        position: 'relative',
        display: 'table',
        height: 90,
        width: 180,
    },
    imageWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    imageStyle: {
        display: 'block',
        margin: '0 auto',
        width: 96,
        height: 64,
    },
    middleContainerStyle: {
        display: 'inline-block',
        height: 90,
        width: 'calc(100% - 360px)',
        float: 'left',
    },
    rightContainerStyle: {
        display: 'inline-block',
        height: 90,
        width: 180,
        float: 'left',
    },
}

export default NavBar;
