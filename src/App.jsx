import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import { useSelector } from "react-redux";
import { Alert, Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ModalAuth from "./components/ModalAuth";
import Footer from "./components/Footer";


function App() {
  const { error } = useSelector(state => state.books)
  return (
    <>
      <div className="App" style={{ maxHeight: '100vh' }}>
        <NavBar />
        <ModalAuth />
        {error && <Alert variant='danger'>
          {error}
        </Alert>}
        <Container fluid="lg">
          <div className="row justify-content-center">
            <BookForm />
          </div>
          <div className="justify-content-center row">
            <BookList />
            <BookDetails />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
