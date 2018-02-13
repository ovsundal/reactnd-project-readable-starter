import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../actions";

const uuidV1 = require('uuid/v1');

class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            author: '',
            body: '',
            timestamp: '',
            parentId: this.props.parentId
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

    handleCreate = event => {
        event.preventDefault();
        const data = {
            id: uuidV1(),
            author: this.state.author,
            body: this.state.body,
            timestamp: Date.now(),
            parentId: this.state.parentId
        };
        this.props.createComment(data);
        this.handleCancel();
        // this.props.history.push('/');
    };

    handleCancel = () => {
        this.props.handleNewCommentForm();
    };

    render() {
        return (
            <Form>
                <h2 className='text-center'>Create New Comment</h2>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="author"
                        placeholder="author"
                        value={this.state.author}
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
                        <Button
                            onClick={this.handleCreate}>Submit
                        </Button>
                    </Col>
                    <Col xs='6'>
                        <Button
                            // handle cancel from parent
                            onClick={this.handleCancel}>Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

const mapDispatchToProps = dispatch => ({
    createComment: (data) => dispatch(actions.createComment(data))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateComment))
