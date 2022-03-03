import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const NewModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="link"
        type="button"
        className="btn btn-link text-left text-white"
        onClick={handleShow}
      >
        <i className="fa fa-info-circle fa-lg" /> Show Description
      </Button>

      <Modal
        {...props}
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            AeroPress
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The fastest of these pour-over methods, AeroPress is known for its
          versatility. Varying immersion time, grind, and plunge can produce a
          range of results from bright and lively, to round and bold.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewModal;
