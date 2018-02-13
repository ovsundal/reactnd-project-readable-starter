import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import React from 'react';
import VotePanel from "../utils/VotePanel";
import * as actions from "../../actions/index";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShowComment from "../comment/ShowComments";
import CreateComment from "../comment/CreateComment";

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
        this.props.getPost(this.props.id);
    }

    componentWillReceiveProps(props) {
        if (props.id) {
            this.setState({
                id: props.id,
                author: props.author,
                title: props.title,
                body: props.body,
                category: props.category,
                voteScore: props.voteScore,
                timestamp: props.timestamp,
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
                <Form>
                    {this.state.id !== ''
                    && <aside>
                        {/*when i use this voting, it seems that all voting panels from the post and all comments are triggered,*/}
                        {/*how to fix this?*/}
                        <VotePanel
                            key={this.props.id}
                            id={this.props.id}
                            voteScore={this.props.voteScore}
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
                        <Input type="text"
                               name="title"
                               placeholder="title"
                               value={this.state.title}
                               onChange={this.handleTextInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="body">Content</Label>
                        <Input
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
                                color='primary'
                                onClick={this.handleUpdate}>Update
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
                <Form>
                    {/*display all comments*/}
                    <h1 className='text-center'>Comments</h1>
                    {this.state.comments.map((comment) =>
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
                </Form>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.PostReducer,
        comments: state.CommentReducer
    };
}

const mapDispatchToProps = dispatch => ({
    addPost: (data) => dispatch(actions.createPost(data)),
    updatePost: (data) => dispatch(actions.updatePost(data)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    getPost: (id) => dispatch(actions.getPost(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPost))