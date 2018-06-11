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
    }
});

const tabWidth = 64;

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        };
        this.click = this.click.bind(this);
        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    toggle() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    close() {
        this.setState({ isMenuOpen: false });
    }

    click() {
        console.log('You clicked an item');
    }

    handleChange = (index) => {
        this.props.handleChange(index);
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {

        const {
            classes,
            index,
            navArr,
        } = this.props;

        const { anchorEl } = this.state;

        const {
            mainContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            leftContainerStyle,
            midContainerStyle,
            midTopContainerStyle,
            smallNavContainerStyle,
            smallNavStyle,
            midBottomContainerStyle,
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
                                logo image
                            </div>
                        </div>
                    </div>

                    <div
                        className={classes.root}
                        style={Object.assign({}, midContainerStyle, { width: tabWidth * navArr.length })}>

                        <div style={midTopContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <div style={smallNavContainerStyle}>
                                        <div style={smallNavStyle}>New features</div>
                                        <div style={smallNavStyle}>Help & Support</div>
                                        <div style={smallNavStyle}>Community</div>
                                        <div style={smallNavStyle}>News</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={midBottomContainerStyle}>
                            <Tabs
                                value={index}
                                onChange={
                                    (event, value) => this.handleChange(value)
                                }
                                fullWidth
                                textColor="secondary"
                                indicatorColor="secondary"
                            >
                                {
                                    navArr.map((nav, idx) => (
                                        <Tab
                                            key={idx}
                                            label={nav.title}
                                            style={{ color: colors.blackColor }}
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
                                    <p style={infoLabelStyle}>UPGRADE NOW</p>
                                </div>
                            </div>
                        </div>
                        <div style={rightBottomContainerStyle}>
                            <DropdownMenu
                                isOpen={this.state.isMenuOpen}
                                close={this.close}
                                toggle={<Button onClick={this.toggle}>profile</Button>}
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
        paddingRight: 18
    },

    midBottomContainerStyle: {
        flex: 1,
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
        fontSize: fonts.h4
    },

    rightBottomContainerStyle: {
        flex: 1,
    }

}

export default withStyles(themeStyles)(NavBar);
