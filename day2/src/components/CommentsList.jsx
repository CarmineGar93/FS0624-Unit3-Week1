import { Component } from "react";
import { ListGroup } from 'react-bootstrap'
class CommentsList extends Component {
    render() {
        return (
            <ListGroup>
                {
                    this.props.array.length === 0 ? (
                        <ListGroup.Item>Nessun commento per questo libro</ListGroup.Item>
                    ) : (
                        this.props.array.map((libro) => {
                            return <ListGroup.Item key={libro._id}>{libro.rate} | {libro.comment}</ListGroup.Item>
                        })
                    )
                }
                
            </ListGroup>
        )
    }
}

export default CommentsList