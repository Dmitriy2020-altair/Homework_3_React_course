import React from 'react';
import './DeleteButton.css'

class DeleteButton extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.deletePost}
                className='delete-btn'
            >
                Delete
            </button>

        )
    }
}

export default DeleteButton;