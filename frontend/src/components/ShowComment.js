import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, Col} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";
import VotePanel from "./VotePanel";
import EditComment from "./EditComment";

class ShowComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inEditMode: false
        }
    }

    deleteComment = (id) => {
        this.props.deleteComment(id);
    };

    editComment = () => {
        const inEditMode = !this.state.inEditMode;
        this.setState({
            inEditMode
        });
    };

    render() {
        return (
            // show comments
            <Col>{!this.state.inEditMode
            && <Card className="comment">
                <CardBody>
                    <CardSubtitle>
                        <span className=' comment-author'>Author: {this.props.author}</span>
                    </CardSubtitle>
                    <section>
                        <VotePanel
                            id={this.props.id}
                            voteScore={this.props.voteScore}
                            componentType='comment'
                        />
                    </section>
                    <article>
                        <br/>
                        <CardText className='comment-content'>{this.props.body}</CardText>
                        <hr/>
                    </article>
                    <footer className='button-panel'>
                        <Button
                            color='primary'
                            onClick={() => this.editComment()}
                            className='float-left'>Edit
                        </Button>
                        <Button
                            color='danger'
                            onClick={() => this.deleteComment(this.props.id)}
                            className='float-right'>Delete
                        </Button>
                        <br/><br/>
                        <i>
                            <p>
                                <span className='comment-dateCreated float-right'>
                                    Created: {new Date(this.props.timestamp).toDateString()}
                                </span>
                            </p>
                        </i>
                    </footer>
                </CardBody>
            </Card>
            }
                {/*comment edit mode*/}
                {this.state.inEditMode
                && <article>
                    <EditComment
                        id={this.props.id}
                        author={this.props.author}
                        body={this.props.body}
                        timestamp={this.props.timestamp}
                        parentId={this.props.parentId}
                        editComment={this.editComment}
                    />
                    <br/>
                </article>
                }
            </Col>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    deleteComment: (id) => dispatch(actions.deleteComment(id))
});

export default connect(
    null,
    mapDispatchToProps
)(ShowComment);