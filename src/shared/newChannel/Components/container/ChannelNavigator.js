import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import DxInput from '../../../components/dxInput/DxInput';

// redux
import { connect } from 'react-redux';

class ChannelNavigator extends Component {

    handleTitleChange = (e) => {

    }

    handleGoback = () => {
        this.props.history.push('/dashboard');
    }

    render() {

        return (
            <NavBar
                isRoute={false}
                navType="CHANNEL"
                handleInputChange={(e) => this.handleTitleChange(e)}
                handleGoback={() => this.handleGoback()}
                />
        )
    }
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
    }
}

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps)(ChannelNavigator);