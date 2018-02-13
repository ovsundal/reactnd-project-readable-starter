import {Button, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../actions/index";

class EditComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            author: this.props.author,
            body: this.props.body,
            timestamp: this.props.timestamp,
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

    handleUpdate = event => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            author: this.state.author,
            body: this.state.body,
            timestamp: Date.now(),
            parentId: this.state.parentId
        };
        this.props.updateComment(data);
        this.props.toggleEditCommentWindow();
    };

    handleCancel = () => {
        this.props.toggleEditCommentWindow();
    };

    render() {
        return (
            <Container>
                <h2 className='text-center'>Edit Comment</h2>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="author"
                        placeholder="author"
                        value={this.state.author}
                        disabled
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
                            onClick={this.handleUpdate}>Update
                        </Button>
                    </Col>
                    <Col xs='6'>
                        <Button
                            // handle cancel from parent
                            onClick={this.handleCancel}>Cancel
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

const mapDispatchToProps = dispatch => ({
    updateComment: (data) => dispatch(actions.updateComment(data))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditComment))
