import React, { Component } from 'react';

// components
import DxEditorToolbar from './DxEditorToolbar';

class PhoneToolbar extends Component {

    renderOptions = () => {
        let {
            sections,
            activePageSectionIndex,
        } = this.props;

        if (!sections) {
            return;
        }

        let options = sections.map((section, i) => {
            if (section.type == 'EDITOR') {
                return (
                    <DxEditorToolbar
                        isActive={activePageSectionIndex == i ? true : false}
                        sectionGUID={section.sectionGUID}
                    />
                )
            } else {
                return (
                    <div
                        className={activePageSectionIndex == i ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
                    >other tools here</div>
                )
            }
        })
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
    },
}

export default PhoneToolbar;