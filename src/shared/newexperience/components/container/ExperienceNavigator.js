import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import DxModal from '../presentation/DxModal';

// helpers
import { search_object_index_by_value } from '../../../helpers';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceCreate as dxExperienceCreateAction,
    dxExperienceUploadFile as dxExperienceUploadFileAction,

    dxExperienceIndexUpdate as dxExperienceIndexUpdateAction,
    dxExperienceTitleUpdate as dxExperienceTitleUpdateAction,

    dxExperienceCardTemplateMenuUpdate as dxExperienceCardTemplateMenuUpdateAction,
    dxExperienceCardTemplateSave as dxExperienceCardTemplateSaveAction,

    dxExperiencePagePagesSave as dxExperiencePagePagesSaveAction,
    dxExperiencePageTemplateMenuUpdate as dxExperiencePageTemplateMenuUpdateAction,
    dxExperiencePageTemplateOptionSelect as dxExperiencePageTemplateOptionSelectAction,
    dxExperiencePageAddPage as dxExperiencePageAddPageAction,
} from '../../actions';
import {
    dxAlert as dxAlertAction,
    dxLoading as dxLoadingAction,
} from '../../../actions';

class ExperienceNavigator extends Component {

    state = {
        isModalOpen: false,
        modalTitle: null,
        modalType: 'EXPERIENCE'
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isFilesUploaded && !this.props.isFilesUploaded){
            this.props.dxLoadingAction(false);
            this.props.dxExperienceCreateAction(this.props.experience);
        }
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

    saveExperience = () => {
        // 1. loading
        this.props.dxLoadingAction(true);
        const {
            experience,
        } = this.props;        
        this.props.dxExperienceUploadFileAction(experience);        
    }

    handleSaveBtnClick = () => {
        let {
            experience,
        } = this.props;

        if (experience.index == 0) {
            let { IsWarning, IsError, Message } = this.validateExperience(experience);
            if (IsWarning) {
                this.setState({
                    isModalOpen: true,
                    modalTitle: Message,
                    modalType: 'EXPERIENCE'
                });
            } else {
                if (IsError) {
                    this.props.dxAlertAction(true, IsError, Message);
                    return;
                }
                this.saveExperience();
            }
        } else if (experience.index == 1) {
            let { IsError, Message } = this.validateExperienceCard(experience.cardTemplate, experience.cardTitle);
            this.props.dxAlertAction(true, IsError, Message);
            if (!IsError) this.props.dxExperienceCardTemplateSaveAction();
        } else if (experience.index == 2) {
            let { IsWarning, IsError, Message } = this.validateExperiencePages(experience.pages);
            if (IsWarning) {
                this.setState({
                    isModalOpen: true,
                    modalTitle: Message,
                    modalType: 'EXPERIENCE_PAGE'
                });
            } else {
                this.props.dxAlertAction(true, IsError, Message);
                if (!IsError) this.props.dxExperiencePagePagesSaveAction();
            }
        }
    }

    validateExperience = (experience) => {
        let res = {
            IsWarning: false,
            IsError: true,
            Message: '',
        };
        const {
            // 1. experience
            type,
            experienceTitle,
            // 2. card
            isCardTemplateSaved,
            card,
            cardTitle,
            // 3. pages
            isPagesSaved,
            pages,
        } = experience;

        // 1. experience
        if (type != 0 && type != 1) {
            res.Message = 'Invalid type';
            return res;
        }
        if (!experienceTitle) {
            res.Message = 'Please enter title';
            return res;
        }
        // 2. card
        if (!isCardTemplateSaved) {
            res.Message = 'Please create & save your card';
            return res;
        }
        let validateCardResponse = this.validateExperienceCard(card, cardTitle);
        res.IsError = validateCardResponse.IsError;
        res.Message = validateCardResponse.Message;
        if (res.IsError) {
            return res;
        } else {
            res.IsError = true;
        }
        // 3. pages
        if (type == 1) {
            if (!isPagesSaved) {
                res.Message = 'Please create & save your page(s)';
                return res;
            }
            let validatePagesResponse = this.validateExperiencePages(pages);
            res.IsWarning = validatePagesResponse.IsWarning;
            res.IsError = validatePagesResponse.IsError;
            res.Message = validatePagesResponse.Message;
            if (res.IsError) {
                return res;
            }
        }
        res.IsError = false;
        return res;
    }

    handleConfirmModal = () => {
        this.setState({
            isModalOpen: false,
        });
        if (this.state.modalType == 'EXPERIENCE') {
            this.saveExperience();
        } else {
            this.props.dxExperiencePagePagesSaveAction();
        }
    }

    validateExperienceCard = (card, title) => {
        let res = {
            IsError: true,
            Message: '',
        }

        if (!card) {
            res.Message = 'Please select a card template';
            return res;
        }
        if (!title) {
            res.Message = 'Please enter card title';
            return res;
        }

        let imageIdx = search_object_index_by_value(card.settings, 'IMAGE');
        if (imageIdx != null
            && !card.settings[imageIdx].Default) {
            res.Message = 'Please select a image';
            return res;
        }

        if (card.type == 'VIDEO'
            && card.content == '') {
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

    validateExperiencePages = (pages) => {
        let res = {
            IsWarning: false,
            IsError: true,
            Message: '',
        }
        let displayPages = this.findDisplayPages(pages);
        let rootPage = this.findRootPageOrChildrenPages(displayPages, 'ROOT');
        let childrenPages = this.findRootPageOrChildrenPages(displayPages, 'CHILDREN');
        // Check Root page
        if (!rootPage.length
            || !rootPage[0].sections.length) {
            res.Message = 'Root page cannot be empty';
            return res;
        }
        // Check sections
        // 1. EDITOR
        // 2. SPLASH
        let unconnectedSplashes = this.findUnconnectedElems(displayPages, 'SPLASH');
        if (unconnectedSplashes.length > 0) {
            res.Message = `${this.printUnconnectedElems(unconnectedSplashes, 'SPLASH')}`;
            return res;
        }
        // 3. EMBED_PDF
        let unconnectedPDFs = this.findUnconnectedElems(displayPages, 'EMBED_PDF');
        if (unconnectedPDFs.length > 0) {
            res.Message = `${this.printUnconnectedElems(unconnectedPDFs, 'PDF')}`;
            return res;
        }
        // 4. VIDEO
        let unconnectedVideos = this.findUnconnectedElems(displayPages, 'VIDEO');
        if (unconnectedVideos.length > 0) {
            res.Message = `${this.printUnconnectedElems(unconnectedVideos, 'VIDEO')}`;
            return res;
        }
        // 5. IMAGE
        let unconnectedImages = this.findUnconnectedElems(displayPages, 'IMAGE');
        if (unconnectedImages.length > 0) {
            res.Message = `${this.printUnconnectedElems(unconnectedImages, 'IMAGE')}`;
            return res;
        }
        // 6. BUTTON
        let unconnectedBtns = this.findUnconnectedElems(displayPages, 'BUTTON');
        if (unconnectedBtns.length > 0) {
            res.IsWarning = true;
            res.Message = `Confirm unconnected button(s)`;
            return res;
        }
        // Check unconnected pages
        let unconnectedPages = this.findUnconnectedPages(childrenPages);
        if (unconnectedPages.length > 0) {
            res.IsWarning = true;
            res.Message = `Confirm unconnected page(s)`;
            return res;
        }
        res.IsError = false;
        res.Message = 'Page(s) has been saved';
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

    findUnconnectedElems = (pages, type) => {
        let output = [];
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            for (let j = 0; j < page.sections.length; j++) {
                let section = page.sections[j];
                if (section.isDeleted) continue;
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
                        && !section.pdf) {
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

    printUnconnectedElems = (arr, type) => {
        let output = '';
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let { page, section } = item;
            let { sectionGUID } = section;
            output += `${page.title} - #${this.findSectionIndex(page.sections, sectionGUID)}: ${type} is not connected, `
        }
        output = output.replace(/,\s*$/, '');
        return output;
    }

    findSectionIndex = (sections, sectionGUID) => {
        let output = [];
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i];
            if (!section.isDeleted) {
                output.push(section);
            }
        }
        for (let i = 0; i < output.length; i++) {
            if (output[i].sectionGUID == sectionGUID) {
                return i + 1;
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <NavBar
                    isRoute={false}
                    navType="EXPERIENCE"
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
                    title={this.state.modalTitle}
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
        isFilesUploaded: state.newexperience.isFilesUploaded,
        experience: state.newexperience.experience,
    }
}

const dispatchToProps = {
    dxExperienceCreateAction,
    dxExperienceUploadFileAction,

    dxExperienceIndexUpdateAction,
    dxExperienceTitleUpdateAction,
    dxExperienceCardTemplateMenuUpdateAction,
    dxExperienceCardTemplateSaveAction,

    dxExperiencePagePagesSaveAction,
    dxExperiencePageTemplateMenuUpdateAction,
    dxExperiencePageTemplateOptionSelectAction,
    dxExperiencePageAddPageAction,

    dxAlertAction,
    dxLoadingAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceNavigator);