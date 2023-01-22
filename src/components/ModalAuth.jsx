import { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handaleUserName } from "../store/slice/authSlice";
import { hideModal } from "../store/slice/modalSlice";



export default function ModalAuth() {
    const { showModal } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(hideModal())
    }
    const [user, setUser] = useState({ name: '' })
    const [validated, setValidated] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ [name]: value })
        setValidated(true);
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity()) {
            dispatch(handaleUserName(user))
            event.stopPropagation();
            setUser({ name: '' })
            setValidated(false);
            handleClose()
        }

    };
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>User Name : </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="User Name"
                            onChange={handleChange}
                            value={user.name}
                            name='name'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end gap-3 mt-3">
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </Modal.Body>

        </Modal>
    )
}