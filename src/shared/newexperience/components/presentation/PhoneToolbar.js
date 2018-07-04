import React, { Component } from 'react';

// components
import DxEditorToolbar from './DxEditorToolbar';

class PhoneToolbar extends Component {

    renderOptions = () => {
        let {
            section
        } = this.props;

        if (!section) {
            return;
        }

        let options;
        switch (section.type) {
            case 'EDITOR':
                options = (
                    <DxEditorToolbar />
                );
                break;
            case 'BUTTON':
                break;
            case 'EMBED_PDF':
                break;
            case 'SPLASH':
                break;
            case 'VIDEO':
                break;
            default:
                break;
        }
        return options;
    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    this.renderOptions()
                }
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        border: '1px solid red',
        height: 48,
        display: 'flex',
        flexDirection: 'row'
    },
}

export default PhoneToolbar;