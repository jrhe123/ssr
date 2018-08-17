import React, { Component } from 'react';

// components
import DxEditorToolbar from './DxEditorToolbar';
import DxPdfViewerToolbar from './DxPdfViewerToolbar';
import DxSplashToolbar from './DxSplashToolbar';
import DxVideoViewerToolbar from './DxVideoViewerToolbar';
import DxImageViewerToolbar from './DxImageViewerToolbar';
import DxLinkToolbar from './DxLinkToolbar';

class PhoneToolbar extends Component {

    renderOptions = () => {
        let {
            activePageSectionIndex,
            tools,
            newPage,
        } = this.props;

        if (!tools.length) {
            return;
        }

        let tmpSections = tools.sort(sort_section_by_index);
        let options = tmpSections.map((section, i) => {
            if (section.Type == 'EDITOR') {
                return (
                    <DxEditorToolbar
                        isActive={(newPage.PageGUID == section.PageGUID && section.IsActive) ? true : false}
                        sectionGUID={section.SectionGUID}
                    />
                )
            } else if (section.Type == 'BUTTON') {
                return null;
            } else if (section.Type == 'EMBED_PDF') {
                return (
                    <DxPdfViewerToolbar
                        isActive={(newPage.PageGUID == section.PageGUID && section.IsActive) ? true : false}
                        handlePdfChange={(file) => this.props.handlePdfChange(file)}
                        handlePdfError={(msg) => this.props.handleErrorMsg(msg)}
                    />
                )
            } else if (section.Type == 'SPLASH') {
                return (
                    <DxSplashToolbar
                        isActive={(newPage.PageGUID == section.PageGUID && section.IsActive) ? true : false}
                        imgFile={newPage.Sections[activePageSectionIndex] ? newPage.Sections[activePageSectionIndex].SplashImg : null}
                        color={newPage.Sections[activePageSectionIndex] ? newPage.Sections[activePageSectionIndex].SplashColor : '#ffffff'}
                        handleImgChange={(file) => this.props.handleSplashImgChange(file)}
                        handleColorChange={(color) => this.props.handleSplashColorChange(color)}
                        handleImgError={(msg) => this.props.handleErrorMsg(msg)}
                    />
                )
            } else if (section.Type == 'VIDEO') {
                return (
                    <DxVideoViewerToolbar
                        isActive={(newPage.PageGUID == section.PageGUID && section.IsActive) ? true : false}
                        videoInput={newPage.Sections[activePageSectionIndex] ? newPage.Sections[activePageSectionIndex].VideoInput : null}
                        handleVideoInputChange={(e) => this.props.handleVideoInputChange(e)}
                        handleVideoInsertClick={() => this.props.handleVideoInsertClick()}
                    />
                )
            } else if (section.Type == 'IMAGE') {
                return (
                    <DxImageViewerToolbar
                        isActive={(newPage.PageGUID == section.PageGUID && section.IsActive) ? true : false}
                        imgFile={newPage.Sections[activePageSectionIndex] ? newPage.Sections[activePageSectionIndex].Img : null}
                        handleImgChange={(file) => this.props.handleImageChange(file)}
                        handleImgError={(msg) => this.props.handleErrorMsg(msg)}
                    />
                )
            } else if (section.Type == 'LINK') {
                return (
                    <DxLinkToolbar 
                        isActive={(newPage.PageGUID == section.PageGUID && section.IsActive) ? true : false}
                        color={newPage.Sections[activePageSectionIndex] ? newPage.Sections[activePageSectionIndex].LinkColor : '#000000'}
                        linkInput={newPage.Sections[activePageSectionIndex] ? newPage.Sections[activePageSectionIndex].LinkInput : null}
                        handleLinkInputChange={(e) => this.props.handleLinkInputChange(e)}
                        handleColorChange={(color) => this.props.handleLinkColorChange(color)}
                        handleLinkInsertClick={() => this.props.handleLinkInsertClick()}
                    />
                )
            } else {
                return (
                    <div
                        className={(newPage.PageGUID == section.PageGUID && section.IsActive) ? 'dx_show_toolbar' : 'dx_hidden_toolbar'}
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
    if (a.Index < b.Index)
        return -1;
    if (a.Index > b.Index)
        return 1;
    return 0;
}

export default PhoneToolbar;