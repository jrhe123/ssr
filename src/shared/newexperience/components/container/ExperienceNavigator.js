import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

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
            this.props.dxAlertAction(true, true, 'test here');
        }
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