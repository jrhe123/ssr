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
import AddAlert from '@material-ui/icons/AddAlert';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import DropdownMenu from 'react-dd-menu';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import sizes from '../../styles/sizes';

// components
import DxInput from '../dxInput/DxInput';

// router
import { Link } from 'react-router-dom';

const themeStyles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 770,
    }
});

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

    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {

        const {
            isRoute,
            classes,
            index,
            navArr,
        } = this.props;

        const {
            mainContainerStyle,
            mainWrapperStyle,
            tableContainerStyle,
            tableWrapperStyle,
            leftContainerStyle,
            imgStyle,
            midContainerStyle,
            midTopContainerStyle,
            smallNavContainerStyle,
            smallNavStyle,
            firstNavStyle,
            notifiNavStyle,
            midBottomContainerStyle,
            tabLabelStyle,
            rightContainerStyle,
            rightTopContainerStyle,
            infoLabelStyle,
            rightBottomContainerStyle,
            userInfoStyle,
            bellStyle,


            leftBtnContainerStyle,
            midContextContainerStyle,
            rightBtnContainerStyle,
            btnStyle,
        } = styles;

        return (

            isRoute ?

                <AppBar
                    position="static"
                    style={mainContainerStyle}>

                    <div style={mainWrapperStyle}>
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

                        <div style={midContainerStyle}>
                            <div style={midTopContainerStyle}>
                                <div style={tableContainerStyle}>
                                    <div style={tableWrapperStyle}>
                                        <div style={smallNavContainerStyle}>
                                            <Link
                                                style={Object.assign({}, smallNavStyle, firstNavStyle)}
                                                to="/features">
                                                NEW FEATURES<span style={notifiNavStyle}></span>
                                            </Link>
                                            <Link style={smallNavStyle} to="/help">HELP & SUPPORT</Link>
                                            <Link style={smallNavStyle} to="/community">COMMUNITY</Link>
                                            <Link style={smallNavStyle} to="/news">NEWS</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classes.root}
                                style={Object.assign({}, midBottomContainerStyle)}>
                                <Tabs
                                    className="dx-tabs"
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
                                                className="dx-tab"
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
                                                <Button style={{ position: 'relative' }} onClick={this.toggle}>
                                                    <AddAlert /><span style={bellStyle} />
                                                    <span style={userInfoStyle}>Roy</span><ExpandMore />
                                                </Button>
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
                    </div>
                </AppBar>

                :

                <AppBar
                    position="static"
                    style={mainContainerStyle}>

                    <div style={mainWrapperStyle}>
                        <div style={leftBtnContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <Button
                                        variant="back"
                                    >
                                        <NavigateBefore />
                                        Back
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div style={midContextContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <DxInput
                                        placeholder="untitled experience"
                                        handleValChange={(e) => this.handleInputChange(e)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={rightBtnContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <Button
                                        variant="save experience"
                                        style={btnStyle}
                                    >Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppBar>
        )
    }
}

const styles = {

    mainContainerStyle: {
        background: colors.whiteColor,
        color: colors.blackColor,
        minWidth: sizes.dxWidth,
    },
    mainWrapperStyle: {
        height: sizes.headerHeight,
        width: '100%',
        maxWidth: sizes.dxWidth,
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto'
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
        flex: 1,
        paddingLeft: 12
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
        paddingLeft: 24,
        paddingRight: 24
    },
    midTopContainerStyle: {
        flex: 2,
    },
    smallNavContainerStyle: {
        display: 'flex'
    },
    smallNavStyle: {
        position: 'relative',
        color: colors.lightGreyColor,
        fontSize: fonts.h5,
        paddingLeft: 18,
        paddingRight: 18,
        textDecoration: 'none',
    },
    firstNavStyle: {
        paddingLeft: 12
    },
    notifiNavStyle: {
        position: 'absolute',
        top: 6,
        right: 9,
        zIndex: 99,
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: colors.greenColor
    },
    midBottomContainerStyle: {
        flex: 1,
    },
    tabLabelStyle: {
        color: colors.blackColor,
        fontSize: fonts.h2,
    },
    rightContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 12
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
    },
    userInfoStyle: {
        paddingLeft: 12,
    },
    bellStyle: {
        position: 'absolute',
        top: 6,
        left: 30,
        zIndex: 99,
        width: 9,
        height: 9,
        borderRadius: '50%',
        backgroundColor: colors.blueColor
    },


    // version 2
    leftBtnContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    midContextContainerStyle: {
        flex: 5,
        paddingLeft: 24,
        paddingRight: 24
    },
    rightBtnContainerStyle: {
        flex: 1,
    },
    btnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
    },

}

export default withStyles(themeStyles)(NavBar);
