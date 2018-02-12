import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import React, {Component} from 'react';
import VotePanel from "./VotePanel";
import * as actions from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
const uuidV1 = require('uuid/v1');

class CreateEditPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            author: '',
            title: '',
            content: '',
            category: '',
            voteScore: '',
            comments: []
        };

        //if this is an existing post to edit, do an api query to get post info
        if (this.props.id) {
            this.props.getPost(this.props.id);
        }
    }

    componentWillReceiveProps(props) {
    //if this is an edit post, set state to added props
        if(props.state.posts && props.state.posts.id) {
            this.setState({
                id: props.id,
                author: props.author,
                title: props.title,
                content: props.content,
                category: props.category,
                voteScore: props.voteScore,
                selectedCategory: props.category
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

    handleCategoryInputChange = event => {
        event.preventDefault();
        const value = event.target.value;

        this.setState({
            selectedCategory: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //fill data
        const data = {
            title: this.state.title,
            body: this.state.content,
        };

        // if new post make a new id, author, timestamp and submit with POST
        if(this.state.id === '') {

            data.id = uuidV1();
            data.author = this.state.author;
            data.timestamp = Date.now();
            data.category = this.state.category;
            data.voteScore = 1;

            //create new post (POST)
            this.props.addPost(data);
        }
        //if this is an existing post, set id to old id and update
        else {
            data.id = this.state.id;

            //update post (PUT)
            this.props.updatePost(data);
        }

        //return to main page
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
                        // disable entry if this is an edit post, author should not be changed
                        disabled={this.state.id !== ''}
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
                    <Label for="content">Content</Label>
                    <Input
                        type="textarea"
                        name="content"
                        placeholder="content"
                        value={this.state.content}
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
                                checked={this.state.selectedCategory === "react"}
                                onChange={this.handleCategoryInputChange}
                                // disable entry if this is an edit post, category should not be changed
                                disabled={this.state.id !== ''}
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
                                checked={this.state.selectedCategory === "redux"}
                                onChange={this.handleCategoryInputChange}
                                disabled={this.state.id !== ''}
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
                                checked={this.state.selectedCategory === "udacity"}
                                onChange={this.handleCategoryInputChange}
                                disabled={this.state.id !== ''}
                            />
                            udacity
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button
                    className='float-left'
                    onClick={this.handleSubmit}>Submit
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
    addPost: (data) => dispatch(actions.addPost(data)),
    updatePost: (data) => dispatch(actions.updatePost(data)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    getPost: (id) => dispatch(actions.getPost(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPost))