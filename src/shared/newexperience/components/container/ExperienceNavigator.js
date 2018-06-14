import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceIndexUpdate as dxExperienceIndexUpdateAction
} from '../../actions';

class ExperienceNavigator extends Component {

    handleGoback = () => {
        const {
            experienceIndex,
        } = this.props;

        if(experienceIndex == 0){
            this.props.history.push('/dashboard');
        }else if(experienceIndex == 1){
            this.props.dxExperienceIndexUpdateAction(0);
        }
    }

    handleTitleChange = (e) => {
        console.log('getting val from: ', e.target.value);
    }

    render() {

        return (
            <NavBar
                isRoute={false}
                itTitle={this.props.experienceIndex == 0 ? true : false}
                handleInputChange={(e) => this.handleTitleChange(e)}
                handleGoback={() => this.handleGoback()}
            />
        )
    }
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        experienceIndex: state.newexperience.experience.index
    }
}

const dispatchToProps = {
    dxExperienceIndexUpdateAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceNavigator);