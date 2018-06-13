import React, { Component } from 'react';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

class DxInput extends Component{

    render(){

        const {
            placeholder
        } = this.props;

        return(
            <input 
                className="dx_input"
                style={styles.inputStyle}
                type="text"
                placeholder={placeholder}
                onChange={(e) => this.props.handleValChange(e)}
            />
        )
    }
}

const styles = {
    inputStyle: {
        minWidth: 240,
        height: 28,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: '18px',
        border: 'none',
        backgroundColor: colors.lightBlueColor,
        fontSize: fonts.h2
    }
}

export default DxInput;