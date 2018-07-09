import React, { Component } from 'react';

class DxPdfViewerToolbar extends Component {

    handlePdfChange = (event) => {
        let file = event.target.files[0];
        console.log('file: ', file);
    }

    render() {

        const {
            mainContainerStyle,
            pdfInputContainerStyle,
            pdfInputStyle,
            displayPdfContainerStyle,
            displayPdfStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div 
                    className=""
                    style={pdfInputContainerStyle}
                >
                    <input
                        style={pdfInputStyle}
                        type="file"
                        onChange={(event) => this.handlePdfChange(event)}
                    />
                    <label
                        style={displayPdfContainerStyle}
                    >
                        <img
                            style={displayPdfStyle}
                            src={require('../../../../../assets/images/pdf_icon.png')}
                        />
                    </label>
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: 48,
        display: 'flex',
        justifyContent: 'center'
    },
    pdfInputContainerStyle: {
        position: 'relative',
        width: 48,
        height: 48,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    pdfInputStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 40,
        height: 48,
        opacity: 0,
        overflow: 'hidden',
        cursor: 'pointer',
    },
    displayPdfContainerStyle: {
        width: 40,
        height: 48,
    },
    displayPdfStyle: {
        display: 'block',
        width: 40,
        height: 48,
        marginLeft: 5
    },
}

export default DxPdfViewerToolbar;