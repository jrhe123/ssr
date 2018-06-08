import React from 'react';

// Libraries
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

// router
import { Link } from 'react-router-dom';

const MainMenu = () => (
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
);

const styles = {

    navBar: {
        display: 'block',
        position: 'fixed',
    }
}

export default MainMenu;
