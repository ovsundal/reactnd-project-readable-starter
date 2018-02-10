import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {addPost} from "../actions";
import {connect} from "react-redux";
const uuidV1 = require('uuid/v1');

class CreateEditPost extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.category)
        console.log(this.props.id)

        this.state = {
            author: '',
            title: '',
            content: '',
            category: '',
            selectedOption: ''
        };
    }

    componentWillMount() {
        if(this.props.id) {

        }
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
            id: uuidV1(),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            category: this.state.category,
            voteScore: 1,
            deletedHOOOO: false
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

export default connect()(CreateEditPost);