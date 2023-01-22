import { Alert, Card } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function BookDetails() {
    const { book } = useSelector(state => state.books)
    return (
        <div className="content col-12 col-md-6 mt-4">
            <h2>Book Details</h2>
            {book ? <div className="book">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title as='h3' className="text-primary">{book[0].title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">User name : {book[0].userName}</Card.Subtitle>
                        <Card.Text as="div">
                            <h6>Discription :</h6>
                            <p>{book[0].discription}</p>
                        </Card.Text>
                        <Card.Text as="div">
                        <h5>Price : <span className="fw-bold text-success">${book[0].price}</span></h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> : <Alert variant='primary'>
                Please Select book
            </Alert>}

        </div>
    )
}