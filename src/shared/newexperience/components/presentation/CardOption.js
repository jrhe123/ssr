import React, { Component } from 'react';

class CardOption extends Component {

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>123</div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 48,
        width: 48,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },

}

export default CardOption;