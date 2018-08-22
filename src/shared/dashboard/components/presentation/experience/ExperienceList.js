import React, { Component } from 'react';

// Libraries
import Add from '@material-ui/icons/Add';

// constatnt
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

// components
import ExperienceCase from './ExperienceCase';

class ExperienceList extends Component {

    render() {

        const {
            experiences
        } = this.props;

        const {
            expTableContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            experienceContainerStyle,
            experienceWrapperStyle,
            statusContainerStyle,
            statusWrapperStyle,
            statusLabelContainerStyle,
            statusLabelStyle,

            newExperienceContainerStyle,
            newExperienceWrapperStyle,
            imgStyle,
            iconContainerStyle,
            addIconStyle,
            newExperienceLabelContainerStyle,
            newExperienceLabelStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                {
                    experiences.map((experience, index) => (
                        <div style={experienceContainerStyle}>
                            <div
                                className="dx_card"
                                style={experienceWrapperStyle}
                            >
                                <ExperienceCase
                                    experience={experience}
                                    handleLoadHtml={(pageGUID, sectionGUID, guid) => this.props.handleLoadHtml(experience.ExperienceGUID, pageGUID, sectionGUID, guid)}
                                    handleEditExperience={() => this.props.handleEditExperience(experience.ExperienceGUID, experience.ExperienceStreamList.length ? false : true)}
                                    handleRemoveExperience={() => this.props.handleRemoveExperience(experience.ExperienceGUID, experience.ExperienceStreamList.length ? false : true)}
                                    handleErrorMsg={(msg) => this.props.handleErrorMsg(msg)}
                                />
                            </div>
                            <div style={statusContainerStyle}>
                                <div style={statusWrapperStyle}>
                                    <div style={statusLabelContainerStyle}>
                                        <p style={Object.assign({}, statusLabelStyle, {color: experience.ExperienceStreamList.length ? colors.greenColor : colors.greyLabelColor})}>{experience.ExperienceStreamList.length ? 'Live' : 'Draft'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div style={newExperienceContainerStyle}>
                    <div style={expTableContainerStyle}>
                        <div style={tableWrapperStyle}>
                            <div
                                style={newExperienceWrapperStyle}
                                onClick={() => this.props.handleCreateExpClick()}
                            >
                                <div style={Object.assign({}, tableContainerStyle, { height: newExpSize })}>
                                    <div style={tableWrapperStyle}>
                                        <img
                                            style={imgStyle}
                                            src={require('../../../../../../assets/images/card_exp.png')} />
                                    </div>
                                </div>
                                <div style={iconContainerStyle}>
                                    <Add style={addIconStyle} />
                                </div>
                                <div style={newExperienceLabelContainerStyle}>
                                    <p style={newExperienceLabelStyle}>ADD EXPERIENCE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const newExpSize = 72;
const styles = {
    expTableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: 470
    },
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
    mainContainerStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    experienceContainerStyle: {
        flex: '300px 0 0',
        height: 540,
    },
    experienceWrapperStyle: {
        width: 276,
        marginTop: 24,
        marginBottom: 24,
        cursor: 'pointer',
    },
    statusContainerStyle: {
        height: 18,
        paddingRight: 24,
    },
    statusWrapperStyle: {
        height: 18,
        width: 72,
        float: 'right',
    },
    statusLabelContainerStyle: {
        borderRadius: 6,
        backgroundColor: colors.whiteColor,
    },
    statusLabelStyle: {
        textAlign: 'center',
        fontSize: fonts.h4
    },
    newExperienceContainerStyle: {
        flex: '300px 0 0',
        marginTop: 24,
        marginBottom: 24,
        height: 512,
    },
    newExperienceWrapperStyle: {
        position: 'relative',
        width: 120,
        height: newExpSize,
        borderRadius: 12,
        backgroundColor: colors.whiteColor,
        border: '1px dotted',
        borderColor: colors.blueBorderColor,
        cursor: 'pointer',
        margin: '0 auto',
    },
    imgStyle: {
        display: 'block',
        width: 90,
        height: 60,
        margin: '0 auto'
    },
    iconContainerStyle: {
        position: 'absolute',
        right: -9,
        bottom: -9,
    },
    addIconStyle: {
        fontSize: 18,
        color: colors.blueColor,
    },
    newExperienceLabelContainerStyle: {
        height: 18
    },
    newExperienceLabelStyle: {
        margin: 0,
        marginTop: 6,
        fontSize: fonts.h4,
        textAlign: 'center'
    },
}

export default ExperienceList;