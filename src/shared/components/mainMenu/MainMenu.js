import React, { Component } from 'react';

// Libraries
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

// router
import { Link } from 'react-router-dom';

class MainMenu extends Component {

    render() {

        return (
            <AppBar
                position="static"
                color="primary"
            >
                <Toolbar>
                    <nav style={styles.navBar}>
                        <Link to="/">Home</Link>
                    </nav>
                </Toolbar>
            </AppBar>
        )
    }
}

const styles = {

    navBar: {
        display: 'block',
        position: 'fixed',
    }
}

export default MainMenu;
