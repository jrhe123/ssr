import React, { Component } from 'react';

// component
import ExperienceList from '../container/ExperienceList';
import NewExperienceModal from '../container/NewExperienceModal';

// Libraries
import Button from '@material-ui/core/Button';
import HelpOutline from '@material-ui/icons/HelpOutline';

// data
import ExperienceData from '../../../../../data/ExperienceData';

// redux
import { connect } from 'react-redux';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';

class Experience extends Component {

    state = {
        newExperienceModalOpen: false,
        experienceData: {}
    }

    componentDidMount() {
        this.setState({
            experienceData: ExperienceData
        })
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
        this.props.history.push(`/new_experience/`+val)
    }

    render() {

        const {
            mainContainerStyle,

            newContentContainerStyle,
            imgStyle,
            labelStyle,
            tableContainerStyle,
            tableWrapperStyle,
            fullBtnStyle,

            contentContainerStyle,
            newContainerStyle,
            newBtnContainerStyle,
            btnStyle,
            iconStyle,
        } = styles;

        const {
            experienceData,
        } = this.state;

        return (
            <div style={mainContainerStyle}>
                {
                    experienceData.length ?
                        (
                            <div>
                                <div style={contentContainerStyle}>
                                    <ExperienceList />
                                </div>
                                <div style={newContainerStyle}>
                                    <div style={newBtnContainerStyle}>
                                        <Button
                                            style={btnStyle}
                                            variant="Add new experience">
                                            Add Experience
                                        </Button>
                                        <HelpOutline style={iconStyle} />
                                    </div>
                                </div>
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
``
const styles = {
    mainContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
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
        border: '1px solie blue'
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        border: '1px solie green'
    },
    contentContainerStyle: {
        flex: 4
    },
    newContainerStyle: {
        flex: 1
    },
    newBtnContainerStyle: {
        marginTop: 48,
        position: 'relative',
    },
    btnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
        width: 132
    },
    iconStyle: {
        position: 'absolute',
        top: 6,
        left: 138,
        cursor: 'pointer'
    },
}

const stateToProps = (state) => {
    return {
        history: state.root.history
    }
}

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps)(Experience);