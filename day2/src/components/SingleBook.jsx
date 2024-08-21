import { Component } from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'

class SingleBook extends Component {
    state = {
        selected: false
    }
    handleClick = (e) => {
        /* this.state.selected === false ? this.setState({ selected: true }) : this.setState({ selected: false }) */
        const sel = this.state.selected
        this.setState({selected: !sel})
    }

    render() {
        const cardClicked = this.state.selected ? 'shadowing' : ''
        return (
            <Container className='mb-5'>
                <Row className='justify-content-center'>
                    <Col xs={10} sm={8} md={6} lg={4}>
                        <Card className={cardClicked}>
                            <Card.Img variant="top" src={this.props.libro.img} onClick={(e) => this.handleClick(e)} />
                            <Card.Body className='d-flex flex-column justify-content-between'>
                                <Card.Title className='fs-1'>{this.props.libro.title}</Card.Title>
                                <Button variant="primary">$ {this.props.libro.price}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SingleBook