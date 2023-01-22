import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/slice/authSlice";
import { showModal } from "../store/slice/modalSlice";


export default function NavBar() {
    const dispatch = useDispatch()
    const { isLogin } = useSelector(state => state.user)
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">My Book</Navbar.Brand>
                {isLogin ?
                    <Button variant="outline-danger" onClick={() => dispatch(logOut())}>LogOut</Button> :
                    <Button variant="outline-primary" onClick={() => dispatch(showModal())}>Login</Button>}
            </Container>
        </Navbar>
    )
}