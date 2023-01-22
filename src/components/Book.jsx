import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBook, readBook } from "../store/slice/bookSlice";

export default function Book(props) {
    const dispatch = useDispatch()
    const { isLogin } = useSelector(state => state.user)
    return (
        <Card className="mb-2">
            <Card.Body className="d-flex justify-content-between align-items-center">
                {props.data.title}
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={()=>{dispatch(readBook(props.data.id))}}>Read</Button>
                    <Button variant="danger" disabled={!isLogin} onClick={()=>{dispatch(DeleteBook(props.data.id))}}>Delete</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}