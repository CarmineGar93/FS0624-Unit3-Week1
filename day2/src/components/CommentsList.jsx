import { Component } from "react";
import { Button, ListGroup } from 'react-bootstrap'
class CommentsList extends Component {
    state = {
        reloaded: false
    }
    handleClick = async (e, id) => {
        e.preventDefault()
        const sure = window.confirm('Sei sicuro?')
        if (sure) {
            try {
                const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
                const asin = id
                const response = await fetch(URL + asin, {
                    method: 'DELETE',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmM3NDI4YWI5NjAwMTU2NjRmMGUiLCJpYXQiOjE3MjQzMjkwNzYsImV4cCI6MTcyNTUzODY3Nn0.Si6MDHOC4QOt-RT6rUZF7zUYk6RqmKdoPXyQKANzAYw"
                }
                })
                if (response.ok) {
                    alert('Recensione cancellata correttamente')
                    this.setState({reloaded: true})
                } else {
                    throw new Error('Errore nella cancellazione del commento')
                }
            } catch (err) {
                alert(err)
            }
        }
    }
    render() {
        return (
            <ListGroup>
                {
                    this.props.array.length === 0 ? (
                        <ListGroup.Item>Nessun commento per questo libro</ListGroup.Item>
                    ) : (
                        this.props.array.map((libro) => {
                            return (
                            <ListGroup.Item key={libro._id} className="d-flex align-items-center">
                                <span>{libro.rate} | {libro.comment} </span>
                                <Button onClick={(e) => this.handleClick(e, libro._id)} variant="danger" className="ms-auto">X</Button>
                            </ListGroup.Item>)
                        })
                    )
                }
                
            </ListGroup>
        )
    }
}

export default CommentsList