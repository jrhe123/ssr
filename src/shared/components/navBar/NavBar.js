import React, { Component } from 'react';

// styles
import '../../../../assets/css/ui-material/ui-material.css';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// constants
import colors from '../../styles/colors';

// router
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 360,
    }
});

class NavBar extends Component {

    handleChange = (index) => {
        this.props.handleChange(index);
    };

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar
                    position="static"
                    color="default"
                >
                    <Tabs
                        value={this.props.index}
                        onChange={
                            (event, value) => this.handleChange(value)
                        }
                        fullWidth
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis='x'
                    index={this.props.index}
                >
                    <div>Item One</div>
                    <div>Item Two</div>
                    <div>Item Three</div>
                </SwipeableViews>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);
