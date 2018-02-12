import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, Col} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";
import VotePanel from "./VotePanel";

class ShowComment extends Component {

    deleteComment = (id) => {
        this.props.deleteComment(id);
    };

    render() {
        return (
            <Col>
                <Card className="comment">
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
                                // onClick={() => this.deleteComment(this.props.id)}
                                className='float-left'>Edit
                            </Button>
                            <Button
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