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
            tableContainerStyle,
            tableWrapperStyle,
            newContentContainerStyle,
            imgStyle,
            labelStyle,
            addBtnStyle,

            mainContainerStyle,
            topBarContainerStyle,
            topBarWrapperStyle,
            searchContainerStyle,
            addBtnContainerStyle,
            experienceListContainerStyle,
            experienceSortContainerStyle,
            experienceNumberContainerStyle,
            experienceNumberStyle,
            experienceListWrapperStyle,
        } = styles;

        return (
            <div>
                {
                    experiences.length ?
                        (
                            <div style={mainContainerStyle}>
                                <div style={topBarContainerStyle}>
                                    <div style={topBarWrapperStyle}>
                                        <div style={searchContainerStyle}>
                                            <SearchBar
                                                isShort={false}
                                                placeholder="search for card(s) and page(s)"
                                            />
                                        </div>
                                        <div style={addBtnContainerStyle}>
                                            <Button
                                                onClick={() => this.handleCreateExperience()}
                                                style={addBtnStyle}
                                                variant="Add new experience">
                                                Add Experience
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                                <div style={experienceListContainerStyle}>
                                    <div style={experienceSortContainerStyle}>
                                        <div style={experienceNumberContainerStyle}>
                                            <p style={experienceNumberStyle}>{totalExperienceRecord} Experience(s)</p>
                                        </div>
                                    </div>
                                    <div style={experienceListWrapperStyle}>
                                        <ExperienceList 
                                            experiences={experiences}
                                            handleCreateExpClick={() => this.handleCreateExperience()}
                                        />
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
                                        style={addBtnStyle}
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

    mainContainerStyle: {
        width: 'calc(100% - 192px - 48px)',
        minHeight: `calc(100vh - ${sizes.headerHeight})`,
        marginLeft: 192,
        marginRight: 48,
    },
    topBarContainerStyle: {
        paddingTop: 36,
        paddingBottom: 48,
        width: '100%',
    },
    topBarWrapperStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    searchContainerStyle: {
        flex: 1,
    },
    addBtnContainerStyle: {
        flex: '132px 0 0'
    },
    addBtnStyle: {
        backgroundColor: colors.blueColor,
        color: colors.whiteColor,
        textTransform: 'capitalize',
    },
    experienceListContainerStyle: {

    },
    experienceSortContainerStyle: {
        width: 240,
        paddingBottom: 12,
        borderBottom: '1px solid',
        borderColor: colors.borderColor
    },
    experienceNumberContainerStyle: {

    },
    experienceNumberStyle: {
        color: colors.labelColor,
        fontSize: fonts.h2,
        margin: 0,
    },
    experienceListWrapperStyle: {
        marginTop: 24,
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