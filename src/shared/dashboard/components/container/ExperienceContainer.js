import React, { Component } from 'react';

// component
import ExperienceList from '../presentation/experience/ExperienceList';
import NewExperienceModal from '../presentation/experience/NewExperienceModal';
import SearchBar from '../../../components/searchBar/SearchBar';
import DxModal from '../../../components/dxModal/DxModal';
import ConfirmForm from '../presentation/experience/ConfirmForm';

// Libraries
import Button from '@material-ui/core/Button';
import DropdownMenu from 'react-dd-menu';
import Edit from '@material-ui/icons/Edit';
import FlashOn from '@material-ui/icons/FlashOn';
import ExpandMore from '@material-ui/icons/ExpandMore';

// redux
import { connect } from 'react-redux';
import {
    dxDashboardNavi as dxDashboardNaviAction,

    dxHtmlFetch as dxHtmlFetchAction,
    dxUpdateExperienceSearch as dxUpdateExperienceSearchAction,
    dxUpdateExperienceFilter as dxUpdateExperienceFilterAction,
    dxFetchExperience as dxFetchExperienceAction,
    dxFetchMoreExperience as dxFetchMoreExperienceAction,
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
        experienceType: '',
        newExperienceModalOpen: false,
        isModalOpen: false,
        modalType: 'DELETE',
        modalTitle: '',
        modalDesc: '',
        isContentModal: false,
        isModalDanger: true,
        targetExperienceGUID: null,
        confirmInput: null,

        isCardOnlyExperienceMenuOpen: false,
        isCardAndPageExperienceMenuOpen: false,
    }

    componentDidMount() {
        this.props.dxFetchExperienceAction('CARD_ONLY');
        this.props.dxFetchExperienceAction('CARD_AND_PAGES');
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

    handleLoadHtml = (experienceGUID, pageGUID, sectionGUID, guid, experienceType) => {
        this.props.dxHtmlFetchAction(experienceGUID, pageGUID, sectionGUID, guid, experienceType);
    }

    handleConfirmFormChange = (val) => {
        this.setState({
            confirmInput: val
        })
    }

    handleEditExperience = (experienceGUID, confirmToEdit) => {
        if (!confirmToEdit) {
            this.setState({
                isModalOpen: true,
                modalType: 'CONFIRM_EDIT',
                modalDesc: null,
                isContentModal: true,
                isModalDanger: false,
                targetExperienceGUID: experienceGUID,
                confirmInput: null
            })
            return;
        }
        this.props.history.push(`/edit_experience/${experienceGUID}`);
    }

    handleConfirmModal = () => {
        const {
            modalType,
            targetExperienceGUID,
            confirmInput,
        } = this.state;
        if (modalType == 'DELETE') {
            this.handleConfirmDeleteExperience();
        } else if (modalType == 'CONFIRM_EDIT'
            || modalType == 'CONFIRM_DELETE') {

            if (confirmInput && confirmInput.toUpperCase() == 'LIVE EDIT') {
                if (modalType == 'CONFIRM_EDIT') this.props.history.push(`/edit_experience/${targetExperienceGUID}`);
                if (modalType == 'CONFIRM_DELETE') this.handleConfirmDeleteExperience();
            } else {
                this.props.dxAlertAction(true, true, 'Please type "LIVE EDIT" in the below text box');
            }
        }
    }

    handleRemoveExperience = (experienceGUID, confirmToRemove, type) => {
        if (!confirmToRemove) {
            this.setState({
                experienceType: type,
                isModalOpen: true,
                modalType: 'CONFIRM_DELETE',
                modalDesc: null,
                isContentModal: true,
                isModalDanger: false,
                targetExperienceGUID: experienceGUID,
                confirmInput: null
            })
            return;
        }
        this.setState({
            experienceType: type,
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
            targetExperienceGUID,
            experienceType
        } = this.state;
        this.props.dxDeleteExperienceAction(targetExperienceGUID, experienceType);
    }

    handleCloseModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    handleToggleCardOnlyExperienceMenu = () => {
        this.setState({
            isCardOnlyExperienceMenuOpen: !this.state.isCardOnlyExperienceMenuOpen
        });
    }

    handleCloseCardOnlyExperienceMenu = () => {
        this.setState({ isCardOnlyExperienceMenuOpen: false });
    }

    handleToggleCardAndPageExperienceMenu = () => {
        this.setState({
            isCardAndPageExperienceMenuOpen: !this.state.isCardAndPageExperienceMenuOpen
        });
    }

    handleCloseCardAndPageExperienceMenu = () => {
        this.setState({ isCardAndPageExperienceMenuOpen: false });
    }

    handleLoadMoreExperience = (experienceType) => {
        const {
            ExperienceSearchInput,
            CurrentCardOnlyExperiencesFilter,
            CurrentCardAndPagesExperiencesFilter,
            CurrentCardOnlyExperiencesPageIndex,
            CurrentCardAndPagesExperiencesPageIndex,
        } = this.props;
        this.props.dxFetchMoreExperienceAction(experienceType, experienceType == 'CARD_ONLY' ? CurrentCardOnlyExperiencesPageIndex : CurrentCardAndPagesExperiencesPageIndex, ExperienceSearchInput, experienceType == 'CARD_ONLY' ? CurrentCardOnlyExperiencesFilter : CurrentCardAndPagesExperiencesFilter);
    }

    handleSearchInputChange = (val) => {
        const {
            CurrentCardOnlyExperiencesFilter,
            CurrentCardAndPagesExperiencesFilter,
        } = this.props;
        this.props.dxUpdateExperienceSearchAction(val, CurrentCardOnlyExperiencesFilter, CurrentCardAndPagesExperiencesFilter);
    }

    handleSelectFilter = (filterType, option) => {
        const {
            ExperienceSearchInput,
            CurrentCardOnlyExperiencesFilter,
            CurrentCardAndPagesExperiencesFilter,
        } = this.props;
        if (filterType == 'CARD_ONLY') {
            if (option != CurrentCardOnlyExperiencesFilter) {
                this.props.dxUpdateExperienceFilterAction(filterType, option, ExperienceSearchInput);
            }
        } else if (filterType == 'CARD_AND_PAGES') {
            if (option != CurrentCardAndPagesExperiencesFilter) {
                this.props.dxUpdateExperienceFilterAction(filterType, option, ExperienceSearchInput);
            }
        }
    }

    render() {

        const {
            ExperienceSearchInput,
            TotalExperienceRecord,
            TotalCardOnlyExperienceRecord,
            TotalCardAndPagesExperienceRecord,

            CardOnlyExperiences,
            CurrentCardOnlyExperiencesFilter,
            CurrentCardOnlyExperiencesFilterLabel,

            CardAndPagesExperiences,
            CurrentCardAndPagesExperiencesFilter,
            CurrentCardAndPagesExperiencesFilterLabel,
        } = this.props;

        const {
            tableContainerStyle,
            tableContainerStyleV2,
            tableWrapperStyle,
            tableWrapperStyleV2,
            newContentContainerStyle,
            imgStyle,
            labelStyle,
            addBtnStyle,

            mainContainerStyle,
            topBarContainerStyle,
            topBarWrapperStyle,
            searchContainerStyle,
            midLabelContainerStyle,
            midLabelStyle,
            capitalMidLabelStyle,
            addBtnContainerStyle,
            experienceListContainerStyle,
            topSubBarContainerStyle,
            experienceSortContainerStyle,
            experienceNumberContainerStyle,
            experienceTypeIndicatorStyle,
            experienceNumberWrapperStyle,
            experienceNumberStyle,
            capitalExperienceNumberStyle,
            experienceListWrapperStyle,

            expandIconStyle,
            experienceFilterContainerStyle,
            experienceFilterWrapperStyle,
            experienceDropdownBtnStyle,
            experienceFilterOptionContainerStyle,
            experienceFilterOptionWrapperStyle,
            experienceFilterOptionIconContainerStyle,
            experienceFilterOptionIconStyle,
            experienceFilterOptionTextContainerStyle,
            experienceFilterOptionTextStyle,

            confirmModalTitleContainerStyle,
            confirmModalTitleStyle,
            confirmModalHighlightTitleStyle,

            loadingBtnContainerStyle,
            loadingBtnStyle,
        } = styles;

        return (
            <div>
                {
                    !TotalExperienceRecord
                        && !ExperienceSearchInput
                        && CurrentCardOnlyExperiencesFilter == 'ALL'
                        && CurrentCardAndPagesExperiencesFilter == 'ALL'
                        ?
                        (
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
                        )
                        :
                        (
                            <div style={mainContainerStyle}>
                                <div style={topBarContainerStyle}>
                                    <div style={topBarWrapperStyle}>
                                        <div style={searchContainerStyle}>
                                            <SearchBar
                                                isShort={false}
                                                placeholder="search for card(s) and page(s)"
                                                content={ExperienceSearchInput}
                                                handleSearchInputChange={(val) => this.handleSearchInputChange(val)}
                                            />
                                        </div>
                                        <div style={midLabelContainerStyle}>
                                            <div style={tableContainerStyleV2}>
                                                <div style={tableWrapperStyleV2}>
                                                    <p style={midLabelStyle}><span style={capitalMidLabelStyle}>{TotalExperienceRecord}</span> Experience(s)</p>
                                                </div>
                                            </div>
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

                                {/* CARD ONLY */}
                                <div style={experienceListContainerStyle}>
                                    <div style={topSubBarContainerStyle}>
                                        <div style={experienceSortContainerStyle}>
                                            <div style={experienceNumberContainerStyle}>
                                                <img style={experienceTypeIndicatorStyle} src={require('../../../../../assets/images/exp_card.png')} />
                                                <div style={experienceNumberWrapperStyle}>
                                                    <div style={tableContainerStyleV2}>
                                                        <div style={tableWrapperStyleV2}>
                                                            <p style={experienceNumberStyle}><span style={capitalExperienceNumberStyle}>{TotalCardOnlyExperienceRecord}</span> Card only</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={experienceFilterContainerStyle}>
                                            <div style={experienceFilterWrapperStyle}>
                                                <div style={tableContainerStyleV2}>
                                                    <div style={tableWrapperStyleV2}>
                                                        <DropdownMenu
                                                            className="dx_channel_filter_menu"
                                                            isOpen={this.state.isCardOnlyExperienceMenuOpen}
                                                            close={this.handleCloseCardOnlyExperienceMenu}
                                                            toggle={
                                                                <Button
                                                                    style={Object.assign({}, experienceDropdownBtnStyle, !this.state.isCardOnlyExperienceMenuOpen ? { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' } : { borderTop: '1px solid', borderLeft: '1px solid', borderRight: '1px solid', borderColor: colors.borderColor })}
                                                                    onClick={() => this.handleToggleCardOnlyExperienceMenu()}
                                                                >{CurrentCardOnlyExperiencesFilterLabel}<ExpandMore style={expandIconStyle} /></Button>
                                                            }
                                                            align={'center'}
                                                            size={'md'}
                                                        >
                                                            <div style={Object.assign({}, experienceFilterOptionContainerStyle)}
                                                                onClick={() => this.handleSelectFilter('CARD_ONLY', 'ALL')}
                                                            >
                                                                <div style={experienceFilterOptionWrapperStyle}>
                                                                    <div style={experienceFilterOptionTextContainerStyle}>
                                                                        <div style={tableContainerStyleV2}>
                                                                            <div style={tableWrapperStyleV2}>
                                                                                <p style={experienceFilterOptionTextStyle}>All</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={Object.assign({}, experienceFilterOptionContainerStyle)}
                                                                onClick={() => this.handleSelectFilter('CARD_ONLY', 'LIVE')}
                                                            >
                                                                <div style={experienceFilterOptionWrapperStyle}>
                                                                    <div style={experienceFilterOptionIconContainerStyle}>
                                                                        <FlashOn style={Object.assign({}, experienceFilterOptionIconStyle, { color: colors.greenColor })} />
                                                                    </div>
                                                                    <div style={experienceFilterOptionTextContainerStyle}>
                                                                        <div style={tableContainerStyleV2}>
                                                                            <div style={tableWrapperStyleV2}>
                                                                                <p style={experienceFilterOptionTextStyle}>Live</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={Object.assign({}, experienceFilterOptionContainerStyle, { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' })}
                                                                onClick={() => this.handleSelectFilter('CARD_ONLY', 'DRAFT')}
                                                            >
                                                                <div style={experienceFilterOptionWrapperStyle}>
                                                                    <div style={experienceFilterOptionIconContainerStyle}>
                                                                        <Edit style={experienceFilterOptionIconStyle} />
                                                                    </div>
                                                                    <div style={experienceFilterOptionTextContainerStyle}>
                                                                        <div style={tableContainerStyleV2}>
                                                                            <div style={tableWrapperStyleV2}>
                                                                                <p style={experienceFilterOptionTextStyle}>Draft</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={experienceListWrapperStyle}>
                                        <ExperienceList
                                            isCardOnly={true}
                                            experiences={CardOnlyExperiences}
                                            handleCreateExpClick={() => this.handleCreateExperience()}
                                            handleLoadHtml={(experienceGUID, pageGUID, sectionGUID, guid) => this.handleLoadHtml(experienceGUID, pageGUID, sectionGUID, guid, 'CARD_ONLY')}
                                            handleEditExperience={(experienceGUID, confirmToEdit) => this.handleEditExperience(experienceGUID, confirmToEdit)}
                                            handleRemoveExperience={(experienceGUID, confirmToRemove) => this.handleRemoveExperience(experienceGUID, confirmToRemove, 'CARD_ONLY')}
                                            handleErrorMsg={(msg) => { }}
                                        />
                                        {
                                            CardOnlyExperiences &&
                                                TotalCardOnlyExperienceRecord > CardOnlyExperiences.length ?
                                                <div style={loadingBtnContainerStyle}>
                                                    <a style={loadingBtnStyle}
                                                        className="dx_glowing_btn"
                                                        onClick={() => this.handleLoadMoreExperience('CARD_ONLY')}
                                                    >Load more</a>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>

                                {/* CARD & PAGES */}
                                <div style={experienceListContainerStyle}>
                                    <div style={topSubBarContainerStyle}>
                                        <div style={experienceSortContainerStyle}>
                                            <div style={experienceNumberContainerStyle}>
                                                <img style={experienceTypeIndicatorStyle} src={require('../../../../../assets/images/exp_pages.png')} />
                                                <div style={experienceNumberWrapperStyle}>
                                                    <div style={tableContainerStyleV2}>
                                                        <div style={tableWrapperStyleV2}>
                                                            <p style={experienceNumberStyle}><span style={capitalExperienceNumberStyle}>{TotalCardAndPagesExperienceRecord}</span> Card + Page(s)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={experienceFilterContainerStyle}>
                                            <div style={experienceFilterWrapperStyle}>
                                                <div style={tableContainerStyleV2}>
                                                    <div style={tableWrapperStyleV2}>
                                                        <DropdownMenu
                                                            className="dx_channel_filter_menu"
                                                            isOpen={this.state.isCardAndPageExperienceMenuOpen}
                                                            close={this.handleCloseCardAndPageExperienceMenu}
                                                            toggle={
                                                                <Button
                                                                    style={Object.assign({}, experienceDropdownBtnStyle, !this.state.isCardAndPageExperienceMenuOpen ? { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' } : { borderTop: '1px solid', borderLeft: '1px solid', borderRight: '1px solid', borderColor: colors.borderColor })}
                                                                    onClick={() => this.handleToggleCardAndPageExperienceMenu()}
                                                                >{CurrentCardAndPagesExperiencesFilterLabel}<ExpandMore style={expandIconStyle} /></Button>
                                                            }
                                                            align={'center'}
                                                            size={'md'}
                                                        >
                                                            <div style={Object.assign({}, experienceFilterOptionContainerStyle)}
                                                                onClick={() => this.handleSelectFilter('CARD_AND_PAGES', 'ALL')}
                                                            >
                                                                <div style={experienceFilterOptionWrapperStyle}>
                                                                    <div style={experienceFilterOptionTextContainerStyle}>
                                                                        <div style={tableContainerStyleV2}>
                                                                            <div style={tableWrapperStyleV2}>
                                                                                <p style={experienceFilterOptionTextStyle}>All</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={Object.assign({}, experienceFilterOptionContainerStyle)}
                                                                onClick={() => this.handleSelectFilter('CARD_AND_PAGES', 'LIVE')}
                                                            >
                                                                <div style={experienceFilterOptionWrapperStyle}>
                                                                    <div style={experienceFilterOptionIconContainerStyle}>
                                                                        <FlashOn style={Object.assign({}, experienceFilterOptionIconStyle, { color: colors.greenColor })} />
                                                                    </div>
                                                                    <div style={experienceFilterOptionTextContainerStyle}>
                                                                        <div style={tableContainerStyleV2}>
                                                                            <div style={tableWrapperStyleV2}>
                                                                                <p style={experienceFilterOptionTextStyle}>Live</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={Object.assign({}, experienceFilterOptionContainerStyle, { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' })}
                                                                onClick={() => this.handleSelectFilter('CARD_AND_PAGES', 'DRAFT')}
                                                            >
                                                                <div style={experienceFilterOptionWrapperStyle}>
                                                                    <div style={experienceFilterOptionIconContainerStyle}>
                                                                        <Edit style={experienceFilterOptionIconStyle} />
                                                                    </div>
                                                                    <div style={experienceFilterOptionTextContainerStyle}>
                                                                        <div style={tableContainerStyleV2}>
                                                                            <div style={tableWrapperStyleV2}>
                                                                                <p style={experienceFilterOptionTextStyle}>Draft</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={experienceListWrapperStyle}>
                                        <ExperienceList
                                            isCardOnly={false}
                                            experiences={CardAndPagesExperiences}
                                            handleCreateExpClick={() => this.handleCreateExperience()}
                                            handleLoadHtml={(experienceGUID, pageGUID, sectionGUID, guid) => this.handleLoadHtml(experienceGUID, pageGUID, sectionGUID, guid, 'CARD_AND_PAGES')}
                                            handleEditExperience={(experienceGUID, confirmToEdit) => this.handleEditExperience(experienceGUID, confirmToEdit)}
                                            handleRemoveExperience={(experienceGUID, confirmToRemove) => this.handleRemoveExperience(experienceGUID, confirmToRemove, 'CARD_AND_PAGES')}
                                            handleErrorMsg={(msg) => { }}
                                        />
                                        {
                                            CardAndPagesExperiences &&
                                                TotalCardAndPagesExperienceRecord > CardAndPagesExperiences.length ?
                                                <div style={loadingBtnContainerStyle}>
                                                    <a style={loadingBtnStyle}
                                                        className="dx_glowing_btn"
                                                        onClick={() => this.handleLoadMoreExperience('CARD_AND_PAGES')}
                                                    >Load more</a>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                }

                <NewExperienceModal
                    open={this.state.newExperienceModalOpen}
                    onCloseModal={() => this.handleCloseExperienceModal()}
                    navigateToNewexperience={(val) => this.handleNavigateToNewexperience(val)}
                />
                <DxModal
                    open={this.state.isModalOpen}
                    hasBottomDiv={this.state.modalType == 'DELETE' ? true : false}
                    userCustomTitle={this.state.modalType != 'DELETE' ? true : false}
                    title={this.state.modalTitle}
                    customTitle={
                        <div style={confirmModalTitleContainerStyle}>
                            <p style={confirmModalTitleStyle}>You are going to EDIT a LIVE experience. To avoid accidental edits, please type "<span style={confirmModalHighlightTitleStyle}>LIVE EDIT</span>" in the below text box and Press "EDIT"</p>
                        </div>
                    }
                    description={this.state.modalDesc}
                    cancel={true}
                    confirm={true}
                    isContent={this.state.isContentModal}
                    content={
                        <ConfirmForm
                            value={this.state.confirmInput}
                            handleInputChange={(val) => this.handleConfirmFormChange(val)}
                            handleConfirmPress={() => this.handleConfirmModal()}
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
    tableContainerStyleV2: {
        display: 'table',
        width: '100%',
        height: `100%`,
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    tableWrapperStyleV2: {
        display: 'table-cell',
        verticalAlign: 'middle',
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
        overFlowY: 'auto',
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
    midLabelContainerStyle: {
        flex: 1,
    },
    midLabelStyle: {
        color: colors.labelColor,
        margin: 0,
        fontSize: fonts.h3,
    },
    capitalMidLabelStyle: {
        fontSize: fonts.h1,
        fontWeight: 'bold'
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
        marginBottom: 90,
    },
    topSubBarContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    experienceSortContainerStyle: {
        flex: '180px 0 0',
    },
    experienceNumberContainerStyle: {
        height: 54,
        display: 'flex',
        flexDirection: 'row'
    },
    experienceTypeIndicatorStyle: {
        flex: '36px 0 0',
        height: 54,
    },
    experienceNumberWrapperStyle: {
        flex: 1,
        marginLeft: 12,
        borderBottom: '1px solid',
        borderColor: colors.borderColor
    },
    experienceNumberStyle: {
        color: colors.labelColor,
        fontSize: fonts.h3,
        margin: 0,
    },
    capitalExperienceNumberStyle: {
        fontSize: fonts.h1,
        fontWeight: 'bold'
    },
    experienceListWrapperStyle: {
        marginTop: 48,
    },

    experienceFilterContainerStyle: {
        flex: 1,
    },
    experienceFilterWrapperStyle: {
        height: 54,
        paddingLeft: 120,
    },
    expandIconStyle: {
        paddingLeft: 3,
        fontSize: '18px',
        color: colors.blackColor
    },
    experienceDropdownBtnStyle: {
        textTransform: 'none',
        fontSize: fonts.h4,
        backgroundColor: colors.whiteColor,
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        width: '130px',
    },
    experienceFilterOptionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: 36,
        cursor: 'pointer',
        border: '1px solid',
        borderTop: 'none',
        borderColor: colors.borderColor,
        boxSizing: 'border-box'
    },
    experienceFilterOptionWrapperStyle: {
        display: 'inline-block',
        margin: '0 auto',
    },
    experienceFilterOptionIconContainerStyle: {
        float: 'left',
        width: 14,
        height: 36,
        position: 'relative',
    },
    experienceFilterOptionIconStyle: {
        position: 'absolute',
        top: 9,
        left: 0,
        width: 14,
        height: 14,
    },
    experienceFilterOptionTextContainerStyle: {
        float: 'left',
        height: 36,
        paddingLeft: 3,
    },
    experienceFilterOptionTextStyle: {
        margin: 0,
        fontSize: fonts.h4,
        color: colors.blackColor
    },

    confirmModalTitleContainerStyle: {
        marginTop: 60,
    },
    confirmModalTitleStyle: {
        margin: 0,
        fontSize: fonts.h1,
        textAlign: 'justify'
    },
    confirmModalHighlightTitleStyle: {
        color: colors.redColor
    },

    loadingBtnContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingBtnStyle: {
        padding: '6px 24px',
        borderRadius: '15px',
        color: colors.whiteColor,
        fontSize: fonts.h3,
    },
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        ExperienceSearchInput: state.dashboard.ExperienceSearchInput,
        TotalExperienceRecord: state.dashboard.TotalExperienceRecord,
        TotalCardOnlyExperienceRecord: state.dashboard.TotalCardOnlyExperienceRecord,
        TotalCardAndPagesExperienceRecord: state.dashboard.TotalCardAndPagesExperienceRecord,

        CardOnlyExperiences: state.dashboard.CardOnlyExperiences,
        CurrentCardOnlyExperiencesPageIndex: state.dashboard.CurrentCardOnlyExperiencesPageIndex,
        CurrentCardOnlyExperiencesFilter: state.dashboard.CurrentCardOnlyExperiencesFilter,
        CurrentCardOnlyExperiencesFilterLabel: state.dashboard.CurrentCardOnlyExperiencesFilterLabel,

        CardAndPagesExperiences: state.dashboard.CardAndPagesExperiences,
        CurrentCardAndPagesExperiencesPageIndex: state.dashboard.CurrentCardAndPagesExperiencesPageIndex,
        CurrentCardAndPagesExperiencesFilter: state.dashboard.CurrentCardAndPagesExperiencesFilter,
        CurrentCardAndPagesExperiencesFilterLabel: state.dashboard.CurrentCardAndPagesExperiencesFilterLabel,
    }
}

const dispatchToProps = {
    dxDashboardNaviAction,
    dxHtmlFetchAction,
    dxUpdateExperienceSearchAction,
    dxUpdateExperienceFilterAction,
    dxFetchExperienceAction,
    dxFetchMoreExperienceAction,
    dxDeleteExperienceAction,

    dxAlertAction,
}

export default connect(stateToProps, dispatchToProps)(ExperienceContainer);