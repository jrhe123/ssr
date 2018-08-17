import React, { Component } from 'react';

// components
import DxInput from '../../../components/dxInput/DxInput';

// constants
import fonts from '../../../styles/fonts';

class DxLink extends Component {

    render() {

        const {
            link,
            linkLabel,
            linkColor,
        } = this.props;

        const {
            tableContainerStyle,
            tableWrapperStyle,
            mainContainerStyle,
        } = styles;

        return (
            <div style={mainContainerStyle}>
                <div style={tableContainerStyle}>
                    <div style={tableWrapperStyle}>
                        {
                            <DxInput
                                placeholder="Hyperlink label.."
                                handleValChange={(e) => this.props.handleLinkLabelInputChange(e)}
                                isDark={false}
                                width="290px"
                                disabled={false}
                                textColor={linkColor}
                                isUnderline={true}
                                isPointer={true}
                                enableClick={true}
                                value={linkLabel ? linkLabel : link}
                                hyperValue={link}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

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
    mainContainerStyle: {
        height: 72,
        cursor: 'default',
    },
}

export default DxLink;