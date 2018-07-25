import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import DxInput from '../../../components/dxInput/DxInput';

class ChannelNavigator extends Component {

    handleTitleChange = (e) => {

    }

    handleGoback = () => {

    }

    render() {

        return (
            <NavBar
                isRoute={false}
                navType="CHANNEL"
                handleInputChange={(e) => this.handleTitleChange(e)}
                handleGoback={() => this.props.handleGoback()}
                />
        )
    }
}

export default ChannelNavigator;