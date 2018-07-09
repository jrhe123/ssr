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
        const { filePath, pageNumber, numPages } = this.state;
        return (
            <div>
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

export default DxPdfViewer;