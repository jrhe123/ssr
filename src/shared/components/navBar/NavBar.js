import React, { Component } from 'react';

// styles
import '../../../../assets/css/react-dd-menu.css';
import '../../../../assets/css/ui-material/ui-material.css';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DropdownMenu from 'react-dd-menu';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// router
import { Link } from 'react-router-dom';

const themeStyles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 600,
    }
});

const tabWidth = 48;

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        };
    }

    toggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    close = () => {
        this.setState({ isMenuOpen: false });
    }

    click = () => {
        console.log('You clicked an item');
    }

    handleChange = (index) => {
        this.props.handleChange(index);
    };

    render() {

        const {
            classes,
            index,
            navArr,
        } = this.props;

        const {
            mainContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            leftContainerStyle,
            imgStyle,
            midContainerStyle,
            midTopContainerStyle,
            smallNavContainerStyle,
            smallNavStyle,
            firstNavStyle,
            midBottomContainerStyle,
            tabLabelStyle,
            rightContainerStyle,
            rightTopContainerStyle,
            infoLabelStyle,
            rightBottomContainerStyle,
        } = styles;

        return (
            <div>
                <AppBar
                    position="static"
                    style={mainContainerStyle}>

                    <div style={leftContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <img 
                                    style={imgStyle}
                                    src={require('../../../../assets/images/logo.png')}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        
                        style={midContainerStyle}>

                        <div style={midTopContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <div style={smallNavContainerStyle}>
                                        <Link style={Object.assign({}, smallNavStyle, firstNavStyle)} to="/features">New features</Link>
                                        <Link style={smallNavStyle} to="/help">Help & Support</Link>
                                        <Link style={smallNavStyle} to="/community">Community</Link>
                                        <Link style={smallNavStyle} to="/news">News</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={classes.root} 
                            style={Object.assign({}, midBottomContainerStyle)}>
                            <Tabs
                                value={index}
                                onChange={
                                    (event, value) => this.handleChange(value)
                                }
                                textColor="secondary"
                                indicatorColor="secondary"
                                centered
                            >
                                {
                                    navArr.map((nav, idx) => (
                                        <Tab
                                            key={idx}
                                            label={nav.title}
                                            style={tabLabelStyle}
                                        />
                                    ))
                                }
                            </Tabs>
                        </div>
                    </div>

                    <div style={rightContainerStyle}>
                        <div style={rightTopContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <Link style={infoLabelStyle} to="/news">UPGRADE NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div style={rightBottomContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <DropdownMenu
                                        isOpen={this.state.isMenuOpen}
                                        close={this.close}
                                        toggle={
                                            <Button onClick={this.toggle}>profile</Button>
                                        }
                                        align='right'
                                    >
                                        <div><Button>Default</Button></div>
                                        <div>
                                            <Button onClick={() => this.props.handleLogoutClick()}>
                                                logout
                                    </Button>
                                        </div>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    </div>

                </AppBar>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 84,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        background: colors.whiteColor,
        color: colors.blackColor
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
        textAlign: 'center'
    },

    leftContainerStyle: {
        flex: 1
    },

    imgStyle: {
        display: 'block',
        width: 42,
        height: 42,
        margin: '0 auto'
    },

    midContainerStyle: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
    },

    midTopContainerStyle: {
        flex: 1,
    },

    smallNavContainerStyle: {
        display: 'flex'
    },

    smallNavStyle: {
        display: 1,
        color: colors.lightGreyColor,
        fontSize: fonts.h4,
        paddingLeft: 18,
        paddingRight: 18,
        textDecoration: 'none'
    },

    firstNavStyle: {
        paddingLeft: 68
    },

    midBottomContainerStyle: {
        flex: 1,
    },

    tabLabelStyle: {
        color: colors.blackColor,
        fontSize: fonts.h3,
    },

    rightContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    rightTopContainerStyle: {
        flex: 1,
    },

    infoLabelStyle: {
        color: colors.greenColor,
        fontSize: fonts.h5,
        textDecoration: 'none'
    },

    rightBottomContainerStyle: {
        flex: 2,
    }

}

export default withStyles(themeStyles)(NavBar);
