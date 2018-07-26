import React, { Component } from 'react';

// constatnt
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

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
            newExperienceContainerStyle,
            newExperienceWrapperStyle,
            imgStyle,
            newExperienceLabelContainerStyle,
            newExperienceLabelStyle,
        } = styles;

        console.log('experiences: ', experiences);

        return (
            <div style={mainContainerStyle}>
                {
                    experiences.map((experience, index) => (
                        <div style={experienceContainerStyle}>12</div>
                    ))
                }
                <div style={newExperienceContainerStyle}>
                    <div 
                        style={newExperienceWrapperStyle}
                        onClick={() => this.props.handleCreateExpClick()}
                    >
                        <div style={Object.assign({}, tableContainerStyle, {height: newExpSize})}>
                            <div style={tableWrapperStyle}>
                                <img
                                    style={imgStyle}
                                    src={require('../../../../../../assets/images/card_exp.png')} />
                            </div>
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

const newExpSize = 90;
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
    },
    experienceContainerStyle: {
        flex: '300px 0 0',
        border: '1px solid green'
    },
    newExperienceContainerStyle: {
        flex: '300px 0 0',
        height: newExpSize + 18,
        border: '1px solid green'
    },
    newExperienceWrapperStyle: {
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