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
                    this.setState({ reloaded: true })
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
                            const star = []
                            for (let i = 0; i < libro.rate; i++) {
                                star.push(<span className="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></span>)
                            }
                            return (
                                <ListGroup.Item key={libro._id} className="d-flex align-items-center">
                                    <div className="ms-1">
                                        <div className="d-flex align-items-center">
                                            <i>Rate: &nbsp;</i>
                                            {
                                                star.map((stars) => {
                                                    return stars
                                                })
                                            }
                                        </div>

                                        <span><i>Commento:</i> {libro.comment} </span>
                                    </div>
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