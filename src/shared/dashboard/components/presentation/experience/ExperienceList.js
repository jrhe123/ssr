import React, { Component } from 'react';

// Libraries
import Add from '@material-ui/icons/Add';

// constatnt
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

// components
import DxCard from '../../../../components/dxCard/DxCard';
import DxPage from '../../../../components/dxPage/DxPage';

class ExperienceList extends Component {

    render() {

        const {
            experiences
        } = this.props;

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
            experienceContainerStyle,
            experienceWrapperStyle,

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
                            <div style={experienceWrapperStyle}>
                            <DxCard
                                isWithTitle={false}
                                isWithBottomBar={false}
                                isCenterCard={false}
                                isEditable={false}
                                isClickable={false}
                                isVideoInsertClickable={false}
                                cardTitle={experience.ExperienceTitle}
                                template={experience.ExperienceCard}
                            />
                            {
                                experience.ExperienceType == 1 ?
                                    <DxPage
                                        pages={experience.ExperiencePages}
                                    />
                                    :
                                    null
                            }
                            </div>
                        </div>
                    ))
                }
                <div style={newExperienceContainerStyle}>
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
        )
    }
}

const newExpSize = 72;
const styles = {

    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
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
        border: '1px solid green'
    },
    experienceWrapperStyle: {
        width: 276,
        margin: '0 auto'
    },
    newExperienceContainerStyle: {
        flex: '300px 0 0',
        height: newExpSize + 18,
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