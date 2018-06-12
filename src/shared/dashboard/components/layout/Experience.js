import React, { Component } from 'react';

// component
import ExperienceList from '../container/ExperienceList';

// Libraries
import Button from '@material-ui/core/Button';
import colors from '../../../styles/colors';
import HelpOutline from '@material-ui/icons/HelpOutline';

class Experience extends Component {

    render() {

        const {
            mainContainerStyle,
            contentContainerStyle,
            newContainerStyle,
            newBtnContainerStyle,
            btnStyle,
            iconStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
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
                        <HelpOutline style={iconStyle}/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
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
    }
}

export default Experience;