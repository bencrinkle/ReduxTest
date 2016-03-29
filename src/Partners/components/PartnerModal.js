import React, {Component, PropTypes} from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class PartnerModal extends Component {
	render(){
		return(
			<Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

PartnerModal.propTypes = {
	showModal: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	partner: PropTypes.object.isRequired
};
