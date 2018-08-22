import React, { Component } from 'react';

// Libraries
import Button from '@material-ui/core/Button';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DropdownMenu from 'react-dd-menu';

// constatnt
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

// components
import DxCard from '../../../../components/dxCard/DxCard';
import DxPage from '../../../../components/dxPage/DxPage';

class ExperienceCase extends Component {

    state = {
        isMenuOpen: false,
    }

    handleMenuClose = () => {
        this.setState({ isMenuOpen: false });
    }

    handleToggleBurger = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {

        const {
            experience,
            enableEditExperience,
        } = this.props;

        const {
            tableContainerStyle,
            tableWrapperStyle,
            bottomControlContainerStyle,
            labelContainerStyle,
            controlContainerStyle,
            controlWrapperStyle,
            bottomLabelStyle,
            editBurgerStyle,
        } = styles;

        return (
            <div>
                <DxCard
                    enableShadow={false}
                    isWithTitle={false}
                    isWithBottomBar={false}
                    isCenterCard={false}
                    isEditable={false}
                    isClickable={false}
                    isVideoInsertClickable={false}
                    cardTitle={experience.ExperienceTitle}
                    template={experience.ExperienceCard}
                    handleVideoError={(msg) => this.props.handleErrorMsg(msg)}
                />
                {
                    experience.ExperienceType == 1 ?
                        <DxPage
                            pdfWidth={264}
                            pages={experience.ExperiencePages}
                            displayPageNumber={false}
                            isWithBottomBar={false}
                            isLoadHtml={true}
                            handleLoadHtml={(pageGUID, sectionGUID, guid) => this.props.handleLoadHtml(pageGUID, sectionGUID, guid)}
                        />
                        :
                        null
                }
                <div style={bottomControlContainerStyle}>
                    <div style={labelContainerStyle}>
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={bottomLabelStyle}>
                                    {experience.ExperienceType == 1 ? `1 card & ${experience.ExperiencePageNumber} pages` : `1 card`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={controlContainerStyle}>
                        <div style={controlWrapperStyle}>
                            <DropdownMenu
                                className="dx_card_template_bottom_bar_menu"
                                isOpen={this.state.isMenuOpen}
                                close={() => this.handleMenuClose()}
                                toggle={
                                    <MoreHoriz
                                        onClick={() => this.handleToggleBurger()}
                                        style={editBurgerStyle} />
                                }
                                align='right'
                                closeOnInsideClick={false}
                            >
                                <Button onClick={() => this.props.handleEditExperience()}>Edit</Button>
                                <Button onClick={() => this.props.handleRemoveExperience()}>Remove</Button>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {

    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    bottomControlContainerStyle: {
        height: 36,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.whiteColor,
        borderTop: '1px solid',
        borderColor: colors.borderColor
    },
    labelContainerStyle: {
        flex: 1,
    },
    bottomLabelStyle: {
        margin: 0,
        fontSize: fonts.h3,
        paddingLeft: 6,
        paddingRight: 6
    },
    controlContainerStyle: {
        flex: '30px 0 0',
        position: 'relative',
    },
    controlWrapperStyle: {
        position: 'absolute',
        top: 3,
        zIndex: 100
    },
    editBurgerStyle: {
        fontSize: 30,
        cursor: 'pointer'
    },
}

export default ExperienceCase;