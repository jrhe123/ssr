import React, { Component } from 'react';

// components
import DxInput from '../../../../components/dxInput/DxInput';

class ConfirmForm extends Component {

    render() {

        return (
            <div>
                <DxInput
                    enableEnter={false}
                    placeholder="Type here.."
                    handleValChange={(e) => this.handleInputChange(e.target.value)}
                    isDark={true}
                    disabled={false}
                    value={this.props.value}
                    isRounded={false}
                    isFullWidth={true}
                />
            </div>
        )
    }
}

const styles ={

}

export default ConfirmForm;