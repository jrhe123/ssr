import React, { Component } from 'react';

// component
import ExperienceList from '../presentation/experience/ExperienceList';
import NewExperienceModal from '../presentation/experience/NewExperienceModal';
import SearchBar from '../../../components/searchBar/SearchBar';
import DxModal from '../../../components/dxModal/DxModal';

// Libraries
import Button from '@material-ui/core/Button';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';

// redux
import { connect } from 'react-redux';
import {
    dxDashboardNavi as dxDashboardNaviAction,
    dxPasswordInput as dxPasswordInputAction,

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

    handleEditExperience = (experienceGUID) => {
        this.props.history.push(`/edit_experience/${experienceGUID}`);
    }

    handlePwdChange = (e, type) => {
        const value = e.target.value;
        this.props.dxPasswordInputAction(value, type);
    }

    handleConfirmModal = () => {
        const {
            modalType
        } = this.state;
        if (modalType == 'DELETE') {
            this.handleConfirmDeleteExperience();
        } else if (modalType == 'LOCK') {
            this.handleConfirmUnlockSite();
        }
    }

    handleUnlockSite = () => {
        this.setState({
            isModalOpen: true,
            modalType: 'LOCK',
            modalTitle: 'Confirm Unlock Site',
            modalDesc: 'Do you want to proceed?',
            isContentModal: true,
            isModalDanger: false,
        })
    }

    handleConfirmUnlockSite = () => {
        if(!this.props.password){
            this.props.dxAlertAction(true, true, 'Please enter your password');
            return;
        }
        if(this.props.password != this.props.confirmPassword){
            this.props.dxAlertAction(true, true, 'Password not matched');
            return;
        }
        this.setState({
            isModalOpen: false
        });
        console.log('call reducer');
    }

    handleRemoveExperience = (experienceGUID) => {
        this.setState({
            isModalOpen: true,
            modalType: 'DELETE',
            modalTitle: 'Confirm Delete Experience',
            modalDesc: 'Do you want to proceed?',
            isContentModal: false,
            isModalDanger: true,
            targetExperienceGUID: experienceGUID,
        })
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

    handleDraftExperience = (experienceGUID) => {
        this.props.dxDashboardNaviAction(2);
    }

    render() {

        const {
            TotalExperienceRecord,
            Experiences,
        } = this.props;

        const {
            tableContainerStyle,
            tableContainerV2Style,
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
            lockContainerStyle,
            lockIconStyle,
            experienceSortContainerStyle,
            experienceNumberContainerStyle,
            experienceNumberStyle,
            experienceListWrapperStyle,

            pwdContainerStyle,
            pwdInputWrapperStyle,
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
                                    <div
                                        style={lockContainerStyle}
                                        onClick={() => this.handleUnlockSite()}>
                                        <div style={tableContainerV2Style}>
                                            <div style={tableWrapperStyle}>
                                                <Lock
                                                    style={lockIconStyle}
                                                />
                                            </div>
                                        </div>
                                    </div>
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
                                            handleEditExperience={(experienceGUID) => this.handleEditExperience(experienceGUID)}
                                            handleRemoveExperience={(experienceGUID) => this.handleRemoveExperience(experienceGUID)}
                                            handleDraftExperience={(experienceGUID) => this.handleDraftExperience(experienceGUID)}
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
                    title={this.state.modalTitle}
                    description={this.state.modalDesc}
                    cancel={true}
                    confirm={true}
                    isContent={this.state.isContentModal}
                    content={
                        this.state.isContentModal ?
                            <div style={pwdContainerStyle}>
                                <div style={pwdInputWrapperStyle}>
                                    <TextField
                                        className="dx_pwd_input"
                                        label="Password"
                                        type="password"
                                        margin="normal"
                                        fullWidth
                                        value={this.props.password}
                                        onChange={(e) => this.handlePwdChange(e, 'PASSWORD')}
                                    />
                                </div>
                                <div style={pwdInputWrapperStyle}>
                                    <TextField
                                        className="dx_pwd_input"
                                        label="Confirm Password"
                                        type="password"
                                        margin="normal"
                                        fullWidth
                                        value={this.props.confirmPassword}
                                        error={this.props.confirmPassword && this.props.password != this.props.confirmPassword}
                                        helperText={(this.props.confirmPassword.length && this.props.password != this.props.confirmPassword) ? "Password not match" : null}
                                        onChange={(e) => this.handlePwdChange(e, 'CONFIRM_PASSWORD')}
                                    />
                                </div>
                            </div>
                            :
                            null
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
    tableContainerV2Style: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: `100%`,
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
    lockContainerStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 60,
        height: 60,
        cursor: 'pointer',
    },
    lockIconStyle: {
        color: colors.blackColor,
        width: 36
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
    pwdContainerStyle: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    pwdInputWrapperStyle: {
        marginBottom: 12,
    },
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        password: state.root.password,
        confirmPassword: state.root.confirmPassword,
        TotalExperienceRecord: state.dashboard.TotalExperienceRecord,
        Experiences: state.dashboard.Experiences,
        IsReloadExperience: state.dashboard.IsReloadExperience,
    }
}

const dispatchToProps = {
    dxDashboardNaviAction,
    dxPasswordInputAction,
    dxHtmlFetchAction,
    dxFetchExperienceAction,
    dxDeleteExperienceAction,

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceContainer);