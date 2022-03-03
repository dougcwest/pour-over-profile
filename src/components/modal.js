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
            {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* eslint-disable-next-line react/destructuring-assignment, react/prop-types */}
          {props.description}
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
