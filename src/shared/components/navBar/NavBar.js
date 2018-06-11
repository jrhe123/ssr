import React, { Component } from 'react';

// styles
import '../../../../assets/css/ui-material/ui-material.css';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// constants
import colors from '../../styles/colors';

// router
import { Link } from 'react-router-dom';

const themeStyles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
});

class NavBar extends Component {

    state = {
        anchorEl: null,
    }

    handleChange = (index) => {
        this.props.handleChange(index);
    };

    handleMenu = event => {
        this.setState({ 
            anchorEl: event.currentTarget 
        });
    };

    handleClose = () => {
        this.setState({ 
            anchorEl: null 
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
            leftContainerStyle,
            midContainerStyle,
            rightContainerStyle,
        } = styles;

        return (
            <AppBar 
                position="static"
                style={mainContainerStyle}>

                <div style={leftContainerStyle}>left here</div>

                <div
                    className={classes.root}
                    style={{ width: 120 * navArr.length }}>

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

                <div style={rightContainerStyle}>right here</div>

            </AppBar>

            // <div>
            //         <IconButton
            //             aria-owns={open ? 'menu-appbar' : null}
            //             aria-haspopup="true"
            //             onClick={this.handleMenu}
            //             color="inherit"
            //         >
            //             <AccountCircle />
            //         </IconButton>
            //         <Menu
            //             id="menu-appbar"
            //             anchorEl={anchorEl}
            //             anchorOrigin={{
            //                 vertical: 'top',
            //                 horizontal: 'right',
            //             }}
            //             transformOrigin={{
            //                 vertical: 'top',
            //                 horizontal: 'right',
            //             }}
            //             open={open}
            //             onClose={this.handleClose}
            //         >
            //             <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            //             <MenuItem onClick={this.handleClose}>My account</MenuItem>
            //         </Menu>
            //     </div>

        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 96,
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },

    leftContainerStyle: {
        flex: 1
    },

    midContainerStyle: {
        flex: 3
    },

    rightContainerStyle: {
        flex: 1
    },

}

export default withStyles(themeStyles)(NavBar);
