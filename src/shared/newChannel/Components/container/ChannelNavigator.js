import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import DxInput from '../../../components/dxInput/DxInput';

class ChannelNavigator extends Component {

    handleTitleChange = (e) => {
        console.log('getting val from: ', e.target.value);
    }

    render() {

        return (
            <NavBar
                isRoute={false}
                handleInputChange={(e) => this.handleTitleChange(e)}
                handleGoback={() => this.props.handleGoback()}
                />
        )
    }
}

export default ChannelNavigator;