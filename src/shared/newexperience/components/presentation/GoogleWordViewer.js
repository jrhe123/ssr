import React, { Component } from 'react';

// Libraries
import Iframe from 'react-iframe';

// constants
import colors from '../../../styles/colors';

class GoogleWordViewer extends Component {

    render() {
        const {
            fileID
        } = this.props;
        const {
            mainContainerStyle,
            coverFrameStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <Iframe
                    url={`https://drive.google.com/open?id=${fileID}`}
                    width="100%"
                    height="500px"
                    display="initial"
                    position="relative"
                    allowFullScreen>
                </Iframe>
                <div style={coverFrameStyle} />
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        position: 'relative',
        border: '1px solid red',
    },
    coverFrameStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 42,
        width: "100%",
        background: colors.whiteColor
    },
}

export default GoogleWordViewer;