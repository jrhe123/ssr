import React, { Component } from 'react';

// Libraries
import Textarea from "react-textarea-autosize";

// constants
import fonts from '../../../styles/fonts';

class ChannelTitleInput extends Component {

    state = {
        titleCharacterCount: 0,
    }

    handleTitleCharacterChange = (e) => {
        var val = e.target.value;
    }

    render() {

        const {
            mainContainerStyle,
            characterCounterStyle,
            titleInputStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <Textarea
                    className='dx_input'
                    style={Object.assign({}, titleInputStyle)}
                    placeholder={""}
                    onChange={(e) => this.handleTitleCharacterChange(e)}
                />
                <p style={characterCounterStyle}>{this.state.titleCharacterCount}/50</p>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {

    },
    characterCounterStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 0
    },
    titleInputStyle: {
        minHeight: 36,
        width: '100%',
        fontSize: fonts.h3,
        border: 'none',
        outlineStyle: 'none',
    },
}

export default ChannelTitleInput;