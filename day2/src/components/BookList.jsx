import { Component } from "react";
import { Col, Container, Row, Form } from 'react-bootstrap'
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        searched: ''
    }
    handleChange = (e) => {
        this.setState({searched: e.target.value})
    }
    render() {
        const filtered = this.props.array.filter((libro) => {
            return libro.title.toLowerCase().includes(this.state.searched.toLowerCase())
        })
        const filtered2 = filtered.length > 30 ? filtered.slice(0, 30) : filtered
        return (
            <Container fluid className='mb-5'>
                <Row className="j justify-content-center">
                    <Col xs={12} md={6}>
                        <h2 className="text-center">Cerca i tuoi libri</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Ricerca"
                                    value={this.state.searched}
                                    onChange={(e) => this.handleChange(e)} required />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row xs={2} sm={3} lg={6} className='gy-4'>
                    {
                     filtered2.map((libro, i) => {
                            return (
                                <Col key={i}>
                                    <SingleBook libro={libro}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default BookList