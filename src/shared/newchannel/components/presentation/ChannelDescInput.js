import React, { Component } from 'react';

// Libraries
import Textarea from "react-textarea-autosize";

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

class ChannelDescInput extends Component {

    state = {
        descriptionCharacterCount: 0
    }

    handleDescriptionCharacterChange = () => {
        // var input = event.target.value;
        // this.setState({
        //     descriptionCharacterCount: 0 + input.length
        // });
    }

    render() {

        const {
            textAreaStyle,
            characterCounterStyle,
        } = styles;

        return (
            <div>
                <Textarea
                    className='dx_input'
                    style={Object.assign({}, textAreaStyle)}
                    placeholder={""}
                    onChange={(e) => this.handleDescriptionCharacterChange(e)}
                />
                <p style={characterCounterStyle}>{this.state.descriptionCharacterCount}/1000</p>
            </div>
        )
    }
}

const styles = {

    textAreaStyle: {
        minHeight: 72,
        width: '100%',
        fontSize: fonts.h3,
        backgroundColor: colors.whiteColor,
        border: 'none',
        outlineStyle: 'none',
    },
    characterCounterStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 0
    },
}

export default ChannelDescInput;