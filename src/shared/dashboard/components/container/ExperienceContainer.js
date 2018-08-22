import React, { Component } from 'react';

// component
import ExperienceList from '../presentation/experience/ExperienceList';
import NewExperienceModal from '../presentation/experience/NewExperienceModal';
import SearchBar from '../../../components/searchBar/SearchBar';
import DxModal from '../../../components/dxModal/DxModal';
import ConfirmForm from '../presentation/experience/ConfirmForm';

// Libraries
import Button from '@material-ui/core/Button';

// redux
import { connect } from 'react-redux';
import {
    dxDashboardNavi as dxDashboardNaviAction,

    dxHtmlFetch as dxHtmlFetchAction,
    dxFetchExperience as dxFetchExperienceAction,
    dxDeleteExperience as dxDeleteExperienceAction,
} from '../../actions';
import {
    dxAlert as dxAlertAction,
} from '../../../actions';

// constants
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';

class ExperienceContainer extends Component {

    state = {
        newExperienceModalOpen: false,
        isModalOpen: false,
        modalType: 'DELETE',
        modalTitle: '',
        modalDesc: '',
        isContentModal: false,
        isModalDanger: true,
        targetExperienceGUID: null,
    }

    componentDidMount() {
        this.props.dxFetchExperienceAction();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.IsReloadExperience && !this.props.IsReloadExperience) {
            this.props.dxFetchExperienceAction();
        }
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
        this.props.history.push(`/new_experience/${val}`);
    }

    handleLoadHtml = (experienceGUID, pageGUID, sectionGUID, guid) => {
        this.props.dxHtmlFetchAction(experienceGUID, pageGUID, sectionGUID, guid);
    }

    handleConfirmFormChange = (val) => {
        console.log('out here: ', val);
    }

    handleEditExperience = (experienceGUID, confirmToEdit) => {
        if (!confirmToEdit) {
            this.setState({
                isModalOpen: true,
                modalType: 'CONFIRM',
                modalTitle: 'Confirm EDIT Experience',
                modalDesc: 'Do you want to proceed?',
                isContentModal: true,
                isModalDanger: false,
                targetExperienceGUID: experienceGUID,
            })
            return;
        }
        this.props.history.push(`/edit_experience/${experienceGUID}`);
    }

    handleConfirmModal = () => {
        const {
            modalType
        } = this.state;
        if (modalType == 'DELETE') {
            this.handleConfirmDeleteExperience();
        } else if (modalType == 'CONFIRM') {
            console.log('confirm with input');
        }
    }

    handleRemoveExperience = (experienceGUID, confirmToRemove) => {
        console.log('confirmToRemove: ', confirmToRemove);
        // this.setState({
        //     isModalOpen: true,
        //     modalType: 'DELETE',
        //     modalTitle: 'Confirm Delete Experience',
        //     modalDesc: 'Do you want to proceed?',
        //     isContentModal: false,
        //     isModalDanger: true,
        //     targetExperienceGUID: experienceGUID,
        // })
    }

    handleConfirmDeleteExperience = () => {
        this.setState({
            isModalOpen: false
        });
        const {
            targetExperienceGUID
        } = this.state;
        this.props.dxDeleteExperienceAction(targetExperienceGUID);
    }

    handleCloseModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {

        const {
            TotalExperienceRecord,
            Experiences,
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
                    Experiences.length ?
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
                                            <p style={experienceNumberStyle}>{TotalExperienceRecord} Experience(s)</p>
                                        </div>
                                    </div>
                                    <div style={experienceListWrapperStyle}>
                                        <ExperienceList
                                            experiences={Experiences}
                                            handleCreateExpClick={() => this.handleCreateExperience()}
                                            handleLoadHtml={(experienceGUID, pageGUID, sectionGUID, guid) => this.handleLoadHtml(experienceGUID, pageGUID, sectionGUID, guid)}
                                            handleEditExperience={(experienceGUID, confirmToEdit) => this.handleEditExperience(experienceGUID, confirmToEdit)}
                                            handleRemoveExperience={(experienceGUID, confirmToRemove) => this.handleRemoveExperience(experienceGUID, confirmToRemove)}
                                            handleErrorMsg={(msg) => { }}
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
                <DxModal
                    open={this.state.isModalOpen}
                    hasBottomDiv={false}
                    userCustomTitle={true}
                    title={this.state.modalTitle}
                    customTitle={
                        <p>my title here</p>
                    }
                    description={this.state.modalDesc}
                    cancel={true}
                    confirm={true}
                    isContent={this.state.isContentModal}
                    content={
                        <ConfirmForm 
                            value=""
                            handleInputChange={(val) => this.handleConfirmFormChange(val)} 
                        />
                    }
                    isDanger={this.state.isModalDanger}
                    handleConfirm={() => this.handleConfirmModal()}
                    onCloseModal={() => this.handleCloseModal()}
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
        position: 'relative',
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
        TotalExperienceRecord: state.dashboard.TotalExperienceRecord,
        Experiences: state.dashboard.Experiences,
        IsReloadExperience: state.dashboard.IsReloadExperience,
    }
}

const dispatchToProps = {
    dxDashboardNaviAction,
    dxHtmlFetchAction,
    dxFetchExperienceAction,
    dxDeleteExperienceAction,

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceContainer);