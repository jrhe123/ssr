import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

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
            this.props.dxAlertAction(true, IsError, Message);

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
        let unconnectedPages = this.findUnconnectedPages(childrenPages);
        if (!rootPage.length
            || !rootPage[0].sections.length) {
            res.Message = 'Please create your page(s)';
            return res;
        }
        if (unconnectedPages.length > 0) {
            res.IsWarning = true;
            res.Message = `Page(s) ${this.printUnconnectedPages(unconnectedPages)} is not connected`;
            return res;
        }

        console.log('rootPage: ', rootPage);
        console.log('childrenPages: ', childrenPages);
        console.log('unconnectedPages: ', unconnectedPages);

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
        output.rtrim(',');
        return output;
    }

    render() {
        return (
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