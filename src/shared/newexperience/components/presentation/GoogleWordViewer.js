import React, { Component } from 'react';

class GoogleWordViewer extends Component {

    render() {

        const {
            fileID
        } = this.props;

        console.log('fileID: ', fileID);

        return (
            <div>viewer here</div>
        )
    }
}

export default GoogleWordViewer;