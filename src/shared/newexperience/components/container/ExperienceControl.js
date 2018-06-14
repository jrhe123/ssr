import React, { Component } from 'react';

// Libraries
import SwipeableViews from 'react-swipeable-views';

// redux
import { connect } from 'react-redux';
import {
    dxExperienceIndexUpdate as dxExperienceIndexUpdateAction
} from '../../actions';

// constants
import sizes from '../../../styles/sizes';

// components
import ExperiencePanel from './ExperiencePanel';
import ExperienceCard from './ExperienceCard';

class ExperienceControl extends Component {

    handleChange = (index) => {
        this.props.dxExperienceIndexUpdateAction(index);
    };

    render() {

        const {
            conentWrapperStyle
        } = styles;

        const {
            experienceIndex
        } = this.props;

        return (
            <SwipeableViews
                axis='x'
                index={this.props.experienceIndex}
                style={conentWrapperStyle}
            >
                {
                    experienceIndex == 0 ?
                        (
                            <ExperiencePanel
                                handleCreateCard={() => this.handleChange(1)}
                            />
                        )
                        :
                        null
                }
                {
                    experienceIndex == 1 ?
                        (
                            <ExperienceCard />
                        )
                        :
                        null
                }
            </SwipeableViews>
        )
    }
}

const styles = {
    conentWrapperStyle: {
        width: sizes.dxWidth,
        margin: '0 auto',
    }
}

const stateToProps = (state) => {
    return {
        experienceIndex: state.newexperience.experience.index
    }
}

const dispatchToProps = {
    dxExperienceIndexUpdateAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceControl);