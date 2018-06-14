import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceIndexUpdate as dxExperienceIndexUpdateAction,
    dxExperienceTitleUpdate as dxExperienceTitleUpdateAction,
} from '../../actions';

class ExperienceNavigator extends Component {

    handleGoback = () => {
        const {
            experience,
        } = this.props;

        if(experience.index == 0){
            this.props.history.push('/dashboard');
        }else if(experience.index == 1){
            this.props.dxExperienceIndexUpdateAction(0);
        }
    }

    handleTitleChange = (e) => {
        const {
            experience,
        } = this.props;
        let content = e.target.value;

        if(experience.index == 0){
            this.props.dxExperienceTitleUpdateAction('EXPERIENCE', content);
        }else if(experience.index == 1){
            this.props.dxExperienceTitleUpdateAction('CARD', content);
        }else if(experience.index == 2){
            this.props.dxExperienceTitleUpdateAction('PAGE', content);
        }
    }

    render() {
        return (
            <NavBar
                isRoute={false}
                experience={this.props.experience}
                handleInputChange={(e) => this.handleTitleChange(e)}
                handleGoback={() => this.handleGoback()}
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
}

export default connect(stateToProps, dispatchToProps)(ExperienceNavigator);