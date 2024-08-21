import { Col, Container, Row, Button, Card } from 'react-bootstrap'

function SingleBook(props) {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6} lg={4}>
                    <Card className='h-100'>
                        <Card.Img variant="top" src={props.libro.img} />
                        <Card.Body className='d-flex flex-column justify-content-between'>
                            <Card.Title className='fs-5'>{props.libro.title}</Card.Title>
                            <Button variant="primary">$ {props.libro.price}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBook