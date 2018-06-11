import React, { Component } from 'react';

// styles
import '../../../../assets/css/ui-material/ui-material.css';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


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

const tabWidth = 64;

class NavBar extends Component {

    state = {
        isOpen: false,
        anchorEl: null,
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
            leftContainerStyle,
            midContainerStyle,
            midTopContainerStyle,
            midBottomContainerStyle,
            rightContainerStyle,
        } = styles;

        return (
            <div>
                <AppBar
                    position="static"
                    style={mainContainerStyle}>

                    <div style={leftContainerStyle}>left here</div>

                    <div
                        className={classes.root}
                        style={Object.assign({}, midContainerStyle, { width: tabWidth * navArr.length })}>

                        <div style={midTopContainerStyle}>top</div>
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

                    </div>

                </AppBar>

                <div>

                    <Button variant="contained" onClick={this.handleClick}>
                        Open Popover
                    </Button>
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography className={classes.typography}>123123.</Typography>
                    </Popover>

                </div>


            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 96,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        background: colors.whiteColor,
        color: colors.blackColor
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

    midBottomContainerStyle: {
        flex: 1,
    },

    rightContainerStyle: {
        flex: 1,
        border: '1px solid red'
    },

}

export default withStyles(themeStyles)(NavBar);
