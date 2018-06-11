import React, { Component } from 'react';

// styles
import '../../../../assets/css/ui-material/ui-material.css';

// Libraries
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// constants
import colors from '../../styles/colors';

// router
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
});

class NavBar extends Component {

    handleChange = (index) => {
        this.props.handleChange(index);
    };

    render() {

        const {
            classes,
            index,
            navArr,
        } = this.props;

        return (
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
                            />
                        ))
                    }
                </Tabs>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);
