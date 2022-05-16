import React from 'react';
import './EditButton.css'

class EditButton extends React.Component {
    render() {
        const { isEdit, editePostTitle } = this.props;
        return (
            <button
                onClick={editePostTitle}
                className={isEdit ? 'save-btn' : 'edit-btn'}
            >
                {isEdit ? 'Save' : 'Edit'}
            </button>

        )
    }
}

export default EditButton;