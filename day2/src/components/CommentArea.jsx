import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import { Alert } from 'react-bootstrap'

class CommentArea extends Component {
    state = {
        comments: [],
        isLoaded: false,
        isError: false
    }

    componentDidMount = () => {
        this.fetchComments()
    }

    fetchComments = async () => {
        try {
            const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
            const asin = this.props.selectedId
            const response = await fetch(URL + asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmM3NDI4YWI5NjAwMTU2NjRmMGUiLCJpYXQiOjE3MjQzMjkwNzYsImV4cCI6MTcyNTUzODY3Nn0.Si6MDHOC4QOt-RT6rUZF7zUYk6RqmKdoPXyQKANzAYw"
                }
            })
            if (response.ok) {
                const commentsRetrieved = await response.json()
                console.log(commentsRetrieved)
                this.setState({
                    comments: commentsRetrieved,
                    isLoaded: true
                })
            } else {
                throw new Error('Errore')
            }
        } catch (err) {
            alert(err)
            this.setState({
                isError: true,
                isLoaded: true
            })
        }
    }
    render() {
        return (
            <div className="mb-3">
                {
                    !this.state.isLoaded && <Loading />
                }
                {
                    this.state.isError && (
                        <Alert variant='danger'>
                            Oops. Something went wrong
                            <i className="bi bi-exclamation-triangle"></i>
                        </Alert>
                    )
                }
                {
                    this.state.isLoaded && !this.state.isError && (
                        <>
                            <CommentsList array={this.state.comments} />
                            <AddComment id={this.props.selectedId} />
                        </>

                    )
                }
            </div>
        )
    }
}

export default CommentArea