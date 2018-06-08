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

            middleContainerStyle,
            rightContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={leftContainerStyle}>
                    <div style={imageContainerStyle}>
                        <img src={require('../../../../assets/images/logo.jpeg')} />
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
        height: 90,
        backgroundColor: colors.whiteColor
    },
    leftContainerStyle: {
        display: 'inline-block',
        height: 90,
        width: 120,
        float: 'left',
    },
    imageContainerStyle: {

    },
    middleContainerStyle: {
        display: 'inline-block',
        height: 90,
        width: 'calc(100% - 240px)',
        float: 'left',
        backgroundColor: 'green'
    },
    rightContainerStyle: {
        display: 'inline-block',
        height: 90,
        width: 120,
        float: 'left',
        backgroundColor: 'yellow'
    },
}

export default NavBar;
