import React, { Component } from 'react';

// Libraries
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import '../../../../assets/css/index.css';

class AlertBar extends Component {

    componentWillReceiveProps(nextProps) {
        let {
            isDisplay,
            isError,
            message,
        } = nextProps.alertBar;

        if(!isDisplay){
            return;
        }
        if(isError){
            Alert.error(`<p>${message}</p>`);
        }else{
            Alert.success(`<p>${message}</p>`);
        }
    }

    render() {
        return (
            <Alert
                position='bottom'
                stack={{ limit: 1 }}
                timeout={3000}
                effect='jelly'
                html={true}
            />
        )
    }
}

export default AlertBar;