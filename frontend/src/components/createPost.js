import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//code from https://reactstrap.github.io/components/form/
class CreatePost extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" id="title" placeholder="Post title" />
                </FormGroup>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input type="textarea" name="text" id="content" />
                </FormGroup>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input type="text" id="author" placeholder="author" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">Picture</Label>
                    <Input type="file" name="file" id="picture" />
                    <FormText color="muted">
                        Upload picture
                    </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Category</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            React
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Redux
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Udacity
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default CreatePost;