import React, { Component } from 'react';

// Libraries
import { Document, Page } from 'react-pdf';

class DxPdfViewer extends Component {

    state = {
        filePath: "http://www.intosaicommunity.net/document/exposure_draft/dummy2Version-1.pdf",
        numPages: null,
        pageNumber: 1,
    }

    handleDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { filePath, pageNumber, numPages } = this.state;
        return (
            <div>
                <Document
                    file={filePath}
                    onLoadSuccess={this.handleDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }
}

export default DxPdfViewer;