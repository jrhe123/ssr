import React, { Component } from 'react';

// components
import DxEditorToolbar from './DxEditorToolbar';
import DxPdfViewerToolbar from './DxPdfViewerToolbar';
import DxSplashToolbar from './DxSplashToolbar';
import DxVideoViewerToolbar from './DxVideoViewerToolbar';
import DxImageViewerToolbar from './DxImageViewerToolbar';

class PhoneToolbar extends Component {

    renderOptions = () => {
        let {
            activePageSectionIndex,
            newPage,
            pages,
        } = this.props;

        let tmpSections = find_all_sections_for_pages(pages);
        if (!tmpSections) {
            return;
        }

        tmpSections = tmpSections.sort(sort_section_by_index);
        let options = tmpSections.map((section, i) => {
            if (section.type == 'EDITOR') {
                return (
                    <DxEditorToolbar
                        isActive={(newPage.pageGUID == section.pageGUID && section.isActive) ? true : false}
                        sectionGUID={section.sectionGUID}
                    />
                )
            } else if (section.type == 'BUTTON') {
                return null;
            } else if (section.type == 'EMBED_PDF') {
                return (
                    <DxPdfViewerToolbar
                        isActive={(newPage.pageGUID == section.pageGUID && section.isActive) ? true : false}
                        handlePdfChange={(file) => this.props.handlePdfChange(file)}
                        handlePdfError={(msg) => this.props.handleErrorMsg(msg)}
                    />
                )
            } else if (section.type == 'SPLASH') {
                return (
                    <DxSplashToolbar
                        isActive={(newPage.pageGUID == section.pageGUID && section.isActive) ? true : false}
                        imgFile={newPage.sections[activePageSectionIndex] ? newPage.sections[activePageSectionIndex].splashImg : null}
                        color={newPage.sections[activePageSectionIndex] ? newPage.sections[activePageSectionIndex].splashColor : '#ffffff'}
                        handleImgChange={(file) => this.props.handleSplashImgChange(file)}
                        handleColorChange={(color) => this.props.handleSplashColorChange(color)}
                        handleImgError={(msg) => this.props.handleErrorMsg(msg)}
                    />
                )
            } else if (section.type == 'VIDEO') {
                return (
                    <DxVideoViewerToolbar
                        isActive={(newPage.pageGUID == section.pageGUID && section.isActive) ? true : false}
                        videoInput={newPage.sections[activePageSectionIndex] ? newPage.sections[activePageSectionIndex].videoInput : null}
                        handleVideoInputChange={(e) => this.props.handleVideoInputChange(e)}
                        handleVideoInsertClick={() => this.props.handleVideoInsertClick()}
                    />
                )
            } else if (section.type == 'IMAGE') {
                return (
                    <DxImageViewerToolbar
                        isActive={(newPage.pageGUID == section.pageGUID && section.isActive) ? true : false}
                    />
                )
            } else {
                return (
                    <div
                        className={(newPage.pageGUID == section.pageGUID && section.isActive) ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
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

const find_all_sections_for_pages = (pages) => {
    let output = [];
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        for (let j = 0; j < page.sections.length; j++) {
            let section = page.sections[j];
            section.pageGUID = page.pageGUID;
            output.push(section);
        }
    }
    return output;
}

export default PhoneToolbar;