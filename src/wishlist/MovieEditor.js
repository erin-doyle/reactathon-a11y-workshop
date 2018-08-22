import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app-root');

class MovieEditor extends Component {
    constructor(props) {
        super(props);

        const { movie } = this.props;

        this.state = {
            notes: movie.notes
        };

        this.handleChangeNotes = this.handleChangeNotes.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChangeNotes(event) {
        this.setState({ notes: event.target.value });
    }

    handleSave() {
        const { updateMovie } = this.props;
        const { notes } = this.state;

        updateMovie({ notes });
    }

    handleClose() {
        const { movie, updateMovie } = this.props;

        updateMovie({ notes: movie.notes });
    }

    render() {
        const { isOpen } = this.props;
        const { notes } = this.state;

        return (
            <Modal
                role="dialog"
                isOpen={isOpen}
                onRequestClose={this.handleClose}
                className="dialog-modal"
                overlayClassName="modal-overlay"
                aria={{
                    labelledby: "modal-title"
                }}
                shouldFocusAfterRender={true}
                shouldCloseOnOverlayClick={true}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 id="modal-title" className="modal-title">Edit Movie</h3>
                            <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="notes">Notes:
                                    <textarea id="notes" className="form-control" value={notes} onChange={this.handleChangeNotes} />
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" onClick={this.handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

MovieEditor.defaultTypes = {
    isOpen: false,
    movie: {}
};

MovieEditor.propTypes = {
    isOpen: PropTypes.bool,
    movie: PropTypes.object,
    updateMovie: PropTypes.func.isRequired
};


export default MovieEditor;
