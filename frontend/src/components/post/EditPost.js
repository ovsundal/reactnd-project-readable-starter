import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import React from 'react';
import VotePanel from "../utils/VotePanel";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShowComment from "../comment/ShowComments";
import CreateComment from "../comment/CreateComment";
import {deletePost, getComments, getPost, updatePost} from "../../actions";

class EditPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            author: '',
            title: '',
            body: '',
            category: '',
            timestamp: '',
            voteScore: '',
            showNewCommentForm: false,
            comments: []
        };
    }

    componentWillMount() {
        this.props.getPost(this.props.match.params.id);
        // this.props.getComments(this.props.match.params.id);
    }

    componentWillReceiveProps(props) {
        const post = props.post[0];
        if (post.id) {
            this.setState({
                id: post.id,
                author: post.author,
                title: post.title,
                body: post.body,
                category: post.category,
                voteScore: post.voteScore,
                timestamp: post.timestamp,
                comments: props.comments
            });
        }
    }

    handleDelete = id => {
        this.props.deletePost(id);
        this.props.history.push('/');
    };

    handleTextInputChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    };

    handleUpdate = event => {
        event.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body,
            id: this.state.id
        };
        this.props.updatePost(data);
        this.props.history.push('/');
    };

    handleNewCommentForm = () => {
        const newCommentForm = !this.state.showNewCommentForm;
        this.setState({
            showNewCommentForm: newCommentForm
        })
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleUpdate}>
                    {this.state.id !== ''
                    && <aside>
                        <VotePanel
                            id={this.state.id}
                            voteScore={this.state.voteScore}
                            componentType='post'
                        />
                    </aside>
                    }
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input
                            type="text"
                            name="author"
                            placeholder="author"
                            value={this.state.author}
                            onChange={this.handleTextInputChange}
                            disabled
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            required
                            type="text"
                               name="title"
                               placeholder="title"
                               value={this.state.title}
                               onChange={this.handleTextInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="body">Content</Label>
                        <Input
                            required
                            type="textarea"
                            name="body"
                            placeholder="content"
                            value={this.state.body}
                            onChange={this.handleTextInputChange}
                        />
                    </FormGroup>
                    <Row className='text-center'>
                        <Col xs='6'>
                            <FormGroup tag="fieldset">
                                <legend>Category</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            required
                                            type="radio"
                                            name="category"
                                            value="react"
                                            checked={this.state.category === "react"}
                                            disabled
                                        />
                                        react
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="category"
                                            value="redux"
                                            checked={this.state.category === "redux"}
                                            disabled
                                        />
                                        redux
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="category"
                                            value="udacity"
                                            checked={this.state.category === "udacity"}
                                            disabled
                                        />
                                        udacity
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col xs='6'>
                            <h4>Created: {new Date(this.state.timestamp).toDateString()}</h4>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col xs='4'>
                            <Button
                                type="submit"
                                color='primary'
                                >Update
                            </Button>
                        </Col>
                        <Col xs='4'>
                            <Button
                                xs='4'
                                onClick={this.handleNewCommentForm}>New Comment
                            </Button>
                        </Col>
                        {this.state.id !== ''
                        && <Col xs='4'>
                            <Button
                                color='danger'
                                xs='4'
                                onClick={() => this.handleDelete(this.props.id)}>Delete Post
                            </Button>
                        </Col>
                        }
                    </Row>
                </Form>
                {/*form for creating new comments*/}
                {this.state.showNewCommentForm
                && <Col>
                    <br/><br/>
                    <CreateComment
                        parentId={this.state.id}
                        handleNewCommentForm={this.handleNewCommentForm}
                    />
                </Col>}

                <br/><br/>
                <section>
                    {/*display all comments*/}
                    <h1 className='text-center'>Comments</h1>
                    {this.state.comments && this.state.comments
                        .sort((a, b) => {return b.timestamp - a.timestamp})
                        .map((comment) =>
                        <section className='comments' key={comment.id}>
                            <ShowComment
                                id={comment.id}
                                parentId={comment.parentId}
                                timestamp={comment.timestamp}
                                body={comment.body}
                                author={comment.author}
                                voteScore={comment.voteScore}
                            />
                        </section>
                    )}
                </section>
            </Container>
        )
    }
}

function mapStateToProps({PostReducer, CommentReducer}) {
    return {
        post: PostReducer,
        comments: CommentReducer
    };
}

export default withRouter(connect(
    mapStateToProps,
    {updatePost, deletePost, getPost, getComments}
)(EditPost))