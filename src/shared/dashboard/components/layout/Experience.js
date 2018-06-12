import React, { Component } from 'react';

// component
import ExperienceList from '../container/ExperienceList';

// Libraries
import Button from '@material-ui/core/Button';
import colors from '../../../styles/colors';
import HelpOutline from '@material-ui/icons/HelpOutline';

// data
import ExperienceData from '../../../../../data/ExperienceData';

class Experience extends Component {

    state = {
        experienceData: {}
    }

    componentDidMount() {
        this.setState({
            experienceData: ExperienceData
        })
    }

    render() {

        const {
            mainContainerStyle,

            newContentContainerStyle,
            imgStyle,
            labelStyle,
            tableContainerStyle,
            tableWrapperStyle,

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
                                    <p 
                                        style={labelStyle}
                                    >
                                        Let's create an amzing experiences for your audience!
                                    </p>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    newContentContainerStyle: {
        height: 'calc(100vh - 84px)',
        width: '100%'
    },
    imgStyle: {
        width: 200,
        height: 140
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        width: '100%',
        height: 'calc(100vh - 84px)',
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

export default Experience;