import React, { Component } from 'react';

// components
import ChannelNavigator from '../container/ChannelNavigator';
import ChannelPanel from '../container/ChannelPanel';

// constants
import sizes from '../../../styles/sizes';

class NewChannel extends Component {

    state = {
        
    }

    componentDidMount(){
        
    }

    handleGoback = () => {
        this.props.history.push('/dashboard');
    }

    handleClickOption = () => {

    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div>
                <ChannelNavigator 
                    handleGoback={() => this.handleGoback()}
                />
                <div style={mainContainerStyle}>
                    <ChannelPanel 
                        handleClickOption={(val) => this.handleClickOption(val)}
                    />
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
        minWidth: sizes.dxWidth,
    },

}

export default NewChannel;