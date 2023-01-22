
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../store/slice/bookSlice";

export default function BookForm() {
    const initialState = { title: '', price: '', discription: '' }
    const { isLogin } = useSelector(state => state.user)
    const [validated, setValidated] = useState(false);
    const [bookData, setData] = useState(initialState);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...bookData, [name]: value })
        setValidated(true);
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity()) {
            dispatch(addBook(bookData))
            event.stopPropagation();
            setData(initialState)
            setValidated(false);
        }
        
    };
    return (
        <div className="content col-12 col-md-7 col-lg-8">
            <h2><i className="bi bi-journal-plus"></i> Add Book</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        onChange={handleChange}
                        value={bookData.title}
                        name='title'
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Price"
                        onChange={handleChange}
                        value={bookData.price}
                        name='price'
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom03">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        placeholder="Description"
                        onChange={handleChange}
                        value={bookData.discription}
                        name='discription'
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="w-100 mt-3" disabled={!isLogin} >Add Book</Button>
            </Form>
        </div>
    )
}