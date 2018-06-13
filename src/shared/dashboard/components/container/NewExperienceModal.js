import React, { Component } from 'react';

// Libraries
import Modal from 'react-responsive-modal';

class NewExperienceModal extends Component {

    onCloseModal = () => {
        this.props.onCloseModal();
    };

    render() {
        const { open } = this.props;
        return (
            <Modal 
                open={open} 
                onClose={() => this.onCloseModal()} 
                center
            >
                <h2>Simple centered modal</h2>
            </Modal>
        )
    }
}

export default NewExperienceModal;