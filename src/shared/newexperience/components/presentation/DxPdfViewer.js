import React, { Component } from 'react';

// Libraries
import { Document, Page } from 'react-pdf';
import '../../../../../assets/css/react-pdf/index.css';

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

        const { pageNumber, numPages } = this.state;
        return (
            <div style={mainContainerStyle}>
                <Document
                    loading="Loading PDF.."
                    file={this.props.pdfPath}
                    onLoadSuccess={this.handleDocumentLoadSuccess}
                    noData="Please select a file.."
                >
                    {
                        Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    width={320}
                                />
                            ),
                        )
                    }
                </Document>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        width: 320,
        margin: '0 auto'
    }
}

export default DxPdfViewer;