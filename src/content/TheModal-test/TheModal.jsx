import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

function TheModal(props) {


  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.description}</Modal.Body>
      <Modal.Body>Monster Type : {props.type}</Modal.Body>
      <Modal.Body>Species : {props.species}</Modal.Body>
      <Modal.Body>banger picture here</Modal.Body>
      <Modal.Footer>foot</Modal.Footer>
    </Modal>
  )
}

export default TheModal;

