import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import React from 'react';
import VotePanel from "./VotePanel";
import * as actions from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            author: '',
            title: '',
            body: '',
            category: '',
            voteScore: '',
            comments: []
        };
    }

    componentWillMount() {
        this.props.getPost(this.props.id);
    }

    componentWillReceiveProps(props) {
        if(props.id) {
            this.setState({
                id: props.id,
                author: props.author,
                title: props.title,
                body: props.body,
                category: props.category,
                voteScore: props.voteScore
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

    render() {
        return (
            <Form>
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
                <Button
                    className='float-left'
                    onClick={this.handleUpdate}>Update
                </Button>
                {/*only render delete post button if post exist (has an id)*/}
                {this.state.id !== ''
                && <Button
                    className='float-right'
                    onClick={() => this.handleDelete(this.props.id)}>Delete Post
                </Button>
                }
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {state};
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