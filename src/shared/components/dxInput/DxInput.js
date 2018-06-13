import React, { Component } from 'react';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

class DxInput extends Component{

    render(){

        const {
            placeholder,
            isDark,
            width,
            disabled
        } = this.props;

        const extra = {};
        extra.width = width ? width : '120px';
        if(isDark){
            extra.backgroundColor = colors.lightBlueColor;
        }else{
            extra.backgroundColor = colors.whiteColor;
        }

        return(
            <input 
                className="dx_input"
                style={Object.assign({}, styles.inputStyle, extra)}
                type="text"
                placeholder={placeholder}
                onChange={(e) => this.props.handleValChange(e)}
                disabled={disabled ? true : false}
            />
        )
    }
}

const styles = {
    inputStyle: {
        height: 28,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: '18px',
        border: 'none',
        fontSize: fonts.h2
    }
}

export default DxInput;