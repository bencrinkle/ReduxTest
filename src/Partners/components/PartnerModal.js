import React, {PropTypes} from 'react';
import { Modal, Button } from 'react-bootstrap';

const PartnerModal = ({showModal, close, partner}) => (
	<Modal show={showModal} onHide={close}>
		<Modal.Header closeButton>
			<Modal.Title>{partner.getIn(['name'])}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={close}>Close</Button>
		</Modal.Footer>
	</Modal>
);

PartnerModal.propTypes = {
	showModal: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	partner: PropTypes.object.isRequired
};

export default PartnerModal;
