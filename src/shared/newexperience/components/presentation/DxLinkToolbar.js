import React, { Component } from 'react';

class DxLinkToolbar extends Component {

    handleImgChange = (event) => {
        let file = event.target.files[0];
        if (!file.type.match('image.*')) {
            this.props.handleImgError('The supported file types are .jpg , .jpeg , .png , .bmp');
            return;
        }
        this.props.handleImgChange(file);
    }

    render() {

        const {
            mainContainerStyle,
            imgInputContainerStyle,
            imgInputStyle,
            displayImgContainerStyle,
            displayImgStyle,
        } = styles;

        return (
            <div
                className={this.props.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
            >
                <div style={mainContainerStyle}>
                    link tool bar here
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {

    },
}

export default DxLinkToolbar;