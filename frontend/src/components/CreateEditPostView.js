import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {addPost} from "../actions";
import {connect} from "react-redux";
import * as actions from "../actions";
const uuidV1 = require('uuid/v1');

class CreateEditPost extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                id: '',
                author: '',
                title: '',
                content: '',
                category: ''
            };

            //if this is an existing post to edit, do an api query
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
            selectedOption: currentPost.selectedOption,
            selectedCategory: currentPost.category
        });
    }


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
            id: this.state.id === '' ? uuidV1 : this.state.id,
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            category: this.state.category,
            voteScore: 1
        };
        //send data to redux
        this.props.dispatch(addPost(data));
        //return to main page
        this.props.history.push('/');
    };

    render() {
        return (
            <Form>
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
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {post: state}
}

const mapDispatchToProps = dispatch => ({
    getPost: (id) => dispatch(actions.getPost(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPost)
