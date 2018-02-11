import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import VotePanel from "./VotePanel";

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
                voteScore: ''
            };

            //if this is an existing post to edit, do an api query to get post info
            if(this.props.id) {
                this.props.getPost(this.props.id);
            }
        }

        //add api query result to state
    componentWillReceiveProps(props) {

        const currentPost = props.post[this.props.id];

        this.setState({
            id: currentPost.id,
            author: currentPost.author,
            title: currentPost.title,
            content: currentPost.body,
            category: currentPost.category,
            voteScore: currentPost.voteScore,
            selectedOption: currentPost.selectedOption,
            selectedCategory: currentPost.category
        });
    }

    handleDelete = id => {
        this.props.deletePost(id);
        this.props.history.push('/');
    };

    //update state when user type
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value,
          selectedCategory: event.target.value
      })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            //if this is an existing post (edit), set id to old id, if new post make a new id
            id: this.state.id === '' ? uuidV1() : this.state.id,
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            category: this.state.category,
            voteScore: 1
        };
        //send data to redux
        this.props.addPost(data);
        //return to main page
        this.props.history.push('/');
    };

    render() {
        return (
            <Form>
                {/*only render score panel if post exist (has an id)*/}
                {this.state.id !== ''
                && <div>
                    <VotePanel
                        id={this.state.id}
                        voteScore={this.state.voteScore}
                    />
                </div>
                }
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="author"
                        placeholder="author"
                        value={this.state.author}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text"
                           name="title"
                           placeholder="title"
                           value={this.state.title}
                           onChange={this.handleInputChange}
                    />
                </FormGroup>
                {/*todo: allow post to attach pictures*/}
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input
                        type="textarea"
                        name="content"
                        placeholder="content"
                        value={this.state.content}
                        onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
        );
    }
}

function mapStateToProps(state) {
    return {post: state}
}

const mapDispatchToProps = dispatch => ({
    addPost: (data) => dispatch(actions.addPost(data)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    getPost: (id) => dispatch(actions.getPost(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPost))
