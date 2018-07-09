import React, { Component } from 'react';

// Libraries
import { Document, Page } from 'react-pdf';

class DxPdfViewer extends Component {

    state = {
        filePath: "http://localhost:2999/sample.pdf",
        numPages: null,
        pageNumber: 1,
    }

    handleDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        const { filePath, pageNumber, numPages } = this.state;
        return (
            <div style={mainContainerStyle}>
                <Document
                    loading="Loading PDF.."
                    file={filePath}
                    onLoadSuccess={this.handleDocumentLoadSuccess}
                    noData="Please select a file.."
                >
                    <Page 
                        pageNumber={pageNumber} 
                        width={318}
                    />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 318,
        boxSizing: 'border-box',
        margin: '0 auto'
    }
}

export default DxPdfViewer;