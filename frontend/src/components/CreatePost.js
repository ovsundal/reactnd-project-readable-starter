import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {addPost} from "../actions";
import {connect} from "react-redux";
const uuidV1 = require('uuid/v1');

//code from https://reactstrap.github.io/components/form/
class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            title: '',
            content: '',
            category: ''
        };
    }

    //update state when user type
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
      })
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: uuidV1(),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            category: this.state.category,
            voteScore: 1,
            deleted: false
        };
        //send data to redux
        this.props.dispatch(addPost(data));
        // this.props.history.push('/');
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
                <FormGroup>
                    <Label for="picture">Picture</Label>
                    <Input
                        type="file"
                        name="file"
                        id="picture"
                        // value={this.state.picture}
                        // onChange={this.handleInputChange}
                    />
                    <FormText color="muted">
                        Upload picture
                    </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Category</legend>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="category"
                                value="React"
                                onChange={this.handleInputChange}
                            />
                            React
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="category"
                                value="Redux"
                                onChange={this.handleInputChange}
                            />
                            Redux
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="category"
                                value="Udacity"
                                onChange={this.handleInputChange}
                            />
                            Udacity
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default connect()(CreatePost);