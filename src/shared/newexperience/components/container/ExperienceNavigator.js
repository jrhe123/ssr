import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import DxModal from '../presentation/DxModal';

// helpers
import { search_object_index_by_value } from '../../../helpers';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceIndexUpdate as dxExperienceIndexUpdateAction,
    dxExperienceTitleUpdate as dxExperienceTitleUpdateAction,

    dxExperienceCardTemplateMenuUpdate as dxExperienceCardTemplateMenuUpdateAction,
    dxExperienceCardTemplateSave as dxExperienceCardTemplateSaveAction,

    dxExperiencePageTemplateMenuUpdate as dxExperiencePageTemplateMenuUpdateAction,
    dxExperiencePageTemplateOptionSelect as dxExperiencePageTemplateOptionSelectAction,
    dxExperiencePageAddPage as dxExperiencePageAddPageAction,
} from '../../actions';
import {
    dxAlert as dxAlertAction,
} from '../../../actions';

class ExperienceNavigator extends Component {

    state = {
        isModalOpen: false,
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    handleGoback = () => {
        const {
            experience,
        } = this.props;

        if (experience.index == 0) {
            this.props.history.push('/dashboard');
        } else if (experience.index == 1) {
            this.props.dxExperienceIndexUpdateAction(0);
        } else if (experience.index == 2) {
            this.props.dxExperienceIndexUpdateAction(0);
        }
    }

    handleSaveBtnClick = () => {
        let {
            experience,
        } = this.props;

        if (experience.index == 0) {
            this.props.dxAlertAction(true, true, 'test here');
        } else if (experience.index == 1) {
            let { IsError, Message } = this.validateExperienceCard(experience);
            this.props.dxAlertAction(true, IsError, Message);
            if (!IsError) this.props.dxExperienceCardTemplateSaveAction();
        } else if (experience.index == 2) {
            let { IsWarning, IsError, Message } = this.validateExperiencePages(experience);
            if (IsWarning) {
                this.setState({
                    isModalOpen: true,
                });
            } else {
                this.props.dxAlertAction(true, IsError, Message);
            }
        }
    }

    validateExperienceCard = (experience) => {
        let res = {
            IsError: true,
            Message: '',
        }
        let cardTemplate = experience.cardTemplate;

        if (!cardTemplate) {
            res.Message = 'Please select a card template';
            return res;
        }
        if (!experience.cardTitle) {
            res.Message = 'Please enter card title';
            return res;
        }

        let imageIdx = search_object_index_by_value(cardTemplate.settings, 'IMAGE');
        if (imageIdx != null
            && !cardTemplate.settings[imageIdx].Default) {
            res.Message = 'Please select a image';
            return res;
        }

        if (cardTemplate.Type == 'VIDEO'
            && !cardTemplate.Content) {
            res.Message = 'Please enter video url';
            return res;
        }

        res.IsError = false;
        res.Message = 'Card has been saved';
        return res;
    }

    handleCardTemplateMenuToggle = () => {
        let toggle = !this.props.experience.isCardTemplateMenuOpen;
        this.props.dxExperienceCardTemplateMenuUpdateAction(toggle);
    }

    handlePageTemplateMenuToggle = () => {
        let toggle = !this.props.experience.isPageTemplateMenuOpen;
        this.props.dxExperiencePageTemplateMenuUpdateAction(toggle);
    }

    handleSelectPageElemOption = (val) => {
        this.props.dxExperiencePageTemplateOptionSelectAction(val);
    }

    handleTitleChange = (e) => {
        const {
            experience,
        } = this.props;
        let content = e.target.value;
        if (experience.index == 0) {
            this.props.dxExperienceTitleUpdateAction('EXPERIENCE', content);
        } else if (experience.index == 1) {
            this.props.dxExperienceTitleUpdateAction('CARD', content);
        } else if (experience.index == 2) {
            this.props.dxExperienceTitleUpdateAction('PAGE', content);
        }
    }

    handleAddNewPage = () => {
        this.props.dxExperiencePageAddPageAction();
    }

    validateExperiencePages = (experience) => {
        let res = {
            IsWarning: false,
            IsError: true,
            Message: '',
        }
        let pages = experience.pages;
        let displayPages = this.findDisplayPages(pages);
        let rootPage = this.findRootPageOrChildrenPages(displayPages, 'ROOT');
        let childrenPages = this.findRootPageOrChildrenPages(displayPages, 'CHILDREN');
        // Check root page
        if (!rootPage.length
            || !rootPage[0].sections.length) {
            res.Message = 'Please create your page(s)';
            return res;
        }
        // Check sections
        // 1. EDITOR
        // 2. BUTTON
        let unconnectedBtns = this.findUnconnectedElems(displayPages, 'BUTTON');
        // 3. EMBED_PDF
        let unconnectedPDFs = this.findUnconnectedElems(displayPages, 'EMBED_PDF');
        // 4. SPLASH
        let unconnectedSplashes = this.findUnconnectedElems(displayPages, 'SPLASH');
        // 5. VIDEO
        let unconnectedVideos = this.findUnconnectedElems(displayPages, 'VIDEO');
        // 6. IMAGE
        let unconnectedImages = this.findUnconnectedElems(displayPages, 'IMAGE');


        console.log('unconnectedBtns: ', unconnectedBtns);
        console.log('unconnectedPDFs: ', unconnectedPDFs);
        console.log('unconnectedSplashes: ', unconnectedSplashes);
        console.log('unconnectedVideos: ', unconnectedVideos);
        console.log('unconnectedImages: ', unconnectedImages);

        // Check unconnected pages
        let unconnectedPages = this.findUnconnectedPages(childrenPages);
        if (unconnectedPages.length > 0) {
            res.IsWarning = true;
            res.Message = `Page(s): ${this.printUnconnectedPages(unconnectedPages)} not connected`;
            return res;
        }


        res.IsError = false;
        res.Message = 'Pages have been saved';
        return res;
    }

    findDisplayPages = (pages) => {
        let output = [];
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            if (!page.isDeleted) {
                output.push(page);
            }
        }
        return output;
    }

    findRootPageOrChildrenPages = (pages, type) => {
        let output = [];
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            if (type == 'ROOT') {
                if (page.isRoot) {
                    output.push(page);
                }
            } else if (type == 'CHILDREN') {
                if (!page.isRoot) {
                    output.push(page);
                }
            }
        }
        return output;
    }

    findUnconnectedPages = (pages) => {
        let output = [];
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            if (!page.isConnected) {
                output.push(page);
            }
        }
        return output;
    }

    printUnconnectedPages = (pages) => {
        let output = '';
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            output += page.title + ',';
        }
        output = output.replace(/,\s*$/, '');
        return output;
    }

    findUnconnectedElems = (pages, type) => {
        let output = [];
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            for (let j = 0; j < page.sections.length; j++) {
                let section = page.sections[j];
                if (type == 'BUTTON') {
                    if (section.type == 'BUTTON'
                        && !section.connectedPageGUID) {
                        output.push({
                            page,
                            section,
                        });
                    }
                } else if (type == 'EMBED_PDF') {
                    if (section.type == 'EMBED_PDF'
                        && !section.pdfPath) {
                        output.push({
                            page,
                            section,
                        });
                    }
                } else if (type == 'SPLASH') {
                    if (section.type == 'SPLASH'
                        && !section.splashImg) {
                        output.push({
                            page,
                            section,
                        });
                    }
                } else if (type == 'VIDEO') {
                    if (section.type == 'VIDEO'
                        && !section.videoUrl) {
                        output.push({
                            page,
                            section,
                        });
                    }
                } else if (type == 'IMAGE') {
                    if (section.type == 'IMAGE'
                        && !section.img) {
                        output.push({
                            page,
                            section,
                        });
                    }
                }
            }
        }
        return output;
    }

    render() {
        return (
            <div>
                <NavBar
                    isRoute={false}
                    experience={this.props.experience}
                    handleGoback={() => this.handleGoback()}
                    handleSaveBtnClick={() => this.handleSaveBtnClick()}
                    handleInputChange={(e) => this.handleTitleChange(e)}
                    handleCardTemplateMenu={() => this.handleCardTemplateMenuToggle()}
                    handlePageTemplateMenu={() => this.handlePageTemplateMenuToggle()}
                    handleSelectPageElemOption={(val) => this.handleSelectPageElemOption(val)}
                    handleAddNewPage={() => this.handleAddNewPage()}
                />
                <DxModal
                    open={this.state.isModalOpen}
                    title={"Confirm save unconnected page(s)"}
                    description="Do you want to proceed?"
                    cancel={true}
                    confirm={true}
                    isDanger={false}
                    handleConfirm={() => this.handleConfirmModal()}
                    onCloseModal={() => this.handleCloseModal()}
                />
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        experience: state.newexperience.experience,
    }
}

const dispatchToProps = {
    dxExperienceIndexUpdateAction,
    dxExperienceTitleUpdateAction,
    dxExperienceCardTemplateMenuUpdateAction,
    dxExperienceCardTemplateSaveAction,
    dxExperiencePageTemplateMenuUpdateAction,
    dxExperiencePageTemplateOptionSelectAction,
    dxExperiencePageAddPageAction,

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceNavigator);