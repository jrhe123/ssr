import React, { Component } from 'react';

// Libraries
import Modal from 'react-responsive-modal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// styles
import '../../../../../assets/css/modal/rrm.css';

class NewExperienceModal extends Component {

    state = {
        value: 'female',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    onCloseModal = () => {
        this.props.onCloseModal();
    };

    render() {
        const {
            mainContainerStyle,
        } = styles;
        const { open } = this.props;
        return (
            <Modal
                open={open}
                onClose={() => this.onCloseModal()}
                center
                classNames={{ 
                    overlay: 'custom-overlay',
                    modal: 'custom-modal',
                }}
            >
                <p>Create awesome experience</p>
                <p>Select one and click continue</p>
                <FormControl
                    component="fieldset"
                    required
                >
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel 
                            value="male" 
                            control={<Radio />} 
                            label="Male" 
                        />
                    </RadioGroup>
                </FormControl>
            </Modal>
        )
    }
}

const styles = {

    
}

export default NewExperienceModal;