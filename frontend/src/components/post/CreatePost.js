import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createPost} from "../../actions";

const uuidV1 = require('uuid/v1');

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            author: '',
            title: '',
            body: '',
            category: '',
            voteScore: 1
        };
    }

    handleTextInputChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleCategoryInputChange = event => {
        const value = event.target.value;
        this.setState({
            selectedCategory: value
        });
    };

    handleCreate = event => {
        event.preventDefault();
        const data = {
            id: uuidV1(),
            author: this.state.author,
            title: this.state.title,
            body: this.state.body,
            category: this.state.selectedCategory,
            timestamp: Date.now(),
            voteScore: 1
        };
        this.props.createPost(data);
        this.props.history.push('/');
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        required
                        type="text"
                        name="author"
                        id="author"
                        placeholder="author"
                        value={this.state.author}
                        onChange={this.handleTextInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text"
                           required
                           name="title"
                           id="title"
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
                        id="body"
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
                                checked={this.state.selectedCategory === "react"}
                                onChange={this.handleCategoryInputChange}
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
                            />
                            udacity
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button
                    type="submit"
                    className='float-left'
                    onClick={this.handleCreate}>Submit
                </Button>
            </Form>
        )
    }
}

export default withRouter(connect(
    null,
    {createPost}
)(CreatePost))
