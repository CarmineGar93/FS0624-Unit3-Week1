import { Component } from 'react'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'

const jSons = {
    fantasy,
    history,
    horror,
    romance,
    scifi
}

class AllTheBooks extends Component {
    render() {
        const data = jSons[this.props.genere]
        return (
            <Container fluid className='mb-5'>
                <Row>
                    <Col>
                        <h2>{this.props.genere.toUpperCase()}</h2>
                    </Col>
                </Row>
                <Row xs={2} md={3} lg={6} className='gy-4'>
                    {
                        data.slice(0,6).map((libro) => {
                            return (
                                <Col key={libro.asin}>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className='d-flex flex-column justify-content-between'>
                                            <Card.Title className='fs-6'>{libro.title}</Card.Title>
                                            <Button variant="primary">$ {libro.price}</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks