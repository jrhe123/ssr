import React, { Component } from 'react';

// Libraries
import Alert from 'react-s-alert';
import '../../../../assets/css/s-alert-default.css';
import '../../../../assets/css/jelly.css';
import '../../../../assets/css/react-s-alert.css';

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