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
            if(!IsError) this.props.dxExperienceIndexUpdateAction(0);
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
        
        let imageIdx = search_object_index_by_value(cardTemplate.Settings, 'IMAGE');
        if (imageIdx != null
            && !cardTemplate.Settings[imageIdx].Default) {
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

    render() {
        return (
            <NavBar
                isRoute={false}
                experience={this.props.experience}
                handleGoback={() => this.handleGoback()}
                handleSaveBtnClick={() => this.handleSaveBtnClick()}
                handleInputChange={(e) => this.handleTitleChange(e)}
                handleCardTemplateMenu={() => this.handleCardTemplateMenuToggle()}
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

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceNavigator);