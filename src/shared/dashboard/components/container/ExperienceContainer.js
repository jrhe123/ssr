import React, { Component } from 'react';

// component
import ExperienceList from '../presentation/experience/ExperienceList';
import NewExperienceModal from '../presentation/experience/NewExperienceModal';
import SearchBar from '../../../components/searchBar/SearchBar';

// Libraries
import Button from '@material-ui/core/Button';

// redux
import { connect } from 'react-redux';
import {
    dxFetchExperience as dxFetchExperienceAction,
} from '../../actions';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';

class ExperienceContainer extends Component {

    state = {
        newExperienceModalOpen: false,
    }

    componentDidMount() {
        this.props.dxFetchExperienceAction();
    }

    handleCreateExperience = () => {
        this.setState({
            newExperienceModalOpen: true
        })
    }

    handleCloseExperienceModal = () => {
        this.setState({
            newExperienceModalOpen: false
        })
    }

    handleNavigateToNewexperience = (val) => {
        this.setState({
            newExperienceModalOpen: false
        });
        this.props.history.push(`/new_experience/` + val)
    }

    render() {

        const {
            totalExperienceRecord,
            experiences,
        } = this.props;

        const {
            newContentContainerStyle,
            imgStyle,
            labelStyle,
            tableContainerStyle,
            tableWrapperStyle,
            fullBtnStyle,
            
        } = styles;

        return (
            <div>
                {
                    experiences.length ?
                        (
                            <div>                                
                                list here
                            </div>
                        )
                        :
                        <div style={newContentContainerStyle}>
                            <div style={tableContainerStyle}>
                                <div style={tableWrapperStyle}>
                                    <img
                                        style={imgStyle}
                                        src={require('../../../../../assets/images/experience.png')}
                                    />
                                    <p style={labelStyle}>
                                        Let's create an amzing experiences for your audience!
                                    </p>
                                    <Button
                                        onClick={() => this.handleCreateExperience()}
                                        style={fullBtnStyle}
                                        variant="Add new experience">
                                        Create an experience
                                    </Button>
                                </div>
                            </div>
                        </div>
                }

                <NewExperienceModal
                    open={this.state.newExperienceModalOpen}
                    onCloseModal={() => this.handleCloseExperienceModal()}
                    navigateToNewexperience={(val) => this.handleNavigateToNewexperience(val)}
                />
            </div>
        )
    }
}


const styles = {
    newContentContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
    },
    imgStyle: {
        display: 'block',
        width: 200,
        height: 140,
        margin: '0 auto',
        marginBottom: 36
    },
    labelStyle: {
        fontSize: fonts.h1,
        color: colors.lightGreyColor,
        marginBottom: 36
    },
    fullBtnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: `calc(100vh - ${sizes.headerHeight})`,
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        totalExperienceRecord: state.dashboard.totalExperienceRecord,
        experiences: state.dashboard.experiences,
    }
}

const dispatchToProps = {
    dxFetchExperienceAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceContainer);