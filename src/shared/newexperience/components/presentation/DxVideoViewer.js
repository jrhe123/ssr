import React, { Component } from 'react';

// Libraries
import ReactPlayer from 'react-player';

// constants
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

class DxVideoViewer extends Component {

    handleVideoError = (e) => {
        console.log('error: ', e);
    }

    render() {

        const {
            mainContainerStyle,
            tableContainerStyle,
            tableWrapperStyle,
            infoLabelStyle,
        } = styles;

        const {
            videoUrl,
        } = this.props;

        return (
            <div style={mainContainerStyle}>
                {
                    videoUrl ?
                        (<ReactPlayer
                            config={{
                                youtube: {
                                    playerVars: { showinfo: 1 }
                                },
                                facebook: {
                                    appId: '868742783317382'
                                }
                            }}
                            width={320}
                            height={180}
                            url={videoUrl}
                            controls={true}
                            onError={(e) => this.handleVideoError(e)}
                        />)
                        :
                        <div style={tableContainerStyle}>
                            <div style={tableWrapperStyle}>
                                <p style={infoLabelStyle}>Please embed a video..</p>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 72,
        backgroundColor: colors.greyColor
    },
    tableContainerStyle: {
        position: 'relative',
        display: 'table',
        height: '100%',
        width: '100%',
    },
    tableWrapperStyle: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    infoLabelStyle: {
        fontSize: fonts.h2,
        color: colors.greyLabelColor,
        margin: 0,
        paddingLeft: 12,
        paddingRight: 12,
    },
}

export default DxVideoViewer;