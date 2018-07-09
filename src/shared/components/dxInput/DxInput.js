import React, { Component } from 'react';

// constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

class DxInput extends Component{

    render(){

        const {
            placeholder,
            invertPlaceholder,
            isDark,
            isTransparent,
            textCenter,
            width,
            disabled,
            value,
        } = this.props;

        const extra = {};
        extra.width = width ? width : '120px';
        if(isDark){
            extra.backgroundColor = colors.lightBlueColor;
        }else{
            extra.backgroundColor = colors.whiteColor;
        }
        if(isTransparent){
            extra.backgroundColor = 'transparent';
        }
        if(textCenter){
            extra.textAlign = 'center';
        }else{
            extra.paddingLeft = 12;
            extra.paddingRight = 12;
        }

        return(
            <input 
                className={invertPlaceholder ? 'dx_input dx_invert_input' : 'dx_input'}
                style={Object.assign({}, styles.inputStyle, extra)}
                type="text"
                placeholder={placeholder}
                onChange={(e) => this.props.handleValChange(e)}
                disabled={disabled ? true : false}
                value={value != null ? value : ''}
            />
        )
    }
}

const styles = {
    inputStyle: {
        height: 28,
        borderRadius: '18px',
        border: 'none',
        fontSize: fonts.h2
    }
}

export default DxInput;