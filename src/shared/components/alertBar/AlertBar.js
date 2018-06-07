import React, { Component } from 'react';

// Libraries
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

class AlertBar extends Component {

    handleClick = () => {
        console.log('clicked');
    }

    render() {
        return (
            <div>
                <Alert
                    position='top-right'
                    stack={{ limit: 1 }}
                />
                <a onClick={() => this.handleClick()}>click me</a>
            </div>
        )
    }
}

export default AlertBar;