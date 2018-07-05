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

        let tmpSections = Object.assign([], sections);
        tmpSections = tmpSections.sort(sort_section_by_index);
        let options = tmpSections.map((section, i) => {
            if (section.type == 'EDITOR') {
                return (
                    <DxEditorToolbar
                        isActive={section.isActive}
                        sectionGUID={section.sectionGUID}
                    />
                )
            } else {
                return (
                    <div
                        className={section.isActive ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
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
        height: 48,
    },
}

const sort_section_by_index = (a, b) => {
    if (a.index < b.index)
        return -1;
    if (a.index > b.index)
        return 1;
    return 0;
}

export default PhoneToolbar;