import React, { Component } from 'react';
import { Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {votePost} from "../actions";
import {connect} from "react-redux";

class Post extends Component {


    submitVote =(id, voteType) => {
        this.props.dispatch(votePost(id, voteType))
    };

    render() {
        return (
            <Col>
                <Card className="post">
                    <CardBody>
                        <CardTitle className='post-title'>{this.props.title}</CardTitle>
                        <CardSubtitle>
                            <span className=' post-author'>Author: {this.props.author}</span>
                            <span className=' post-score float-right'>Score: {this.props.voteScore}</span>
                            <br/>
                        </CardSubtitle>
                        {/*vote section*/}
                        <button
                            onClick={() => this.submitVote(this.props.id, 'upVote')}>UPVOTE
                        </button>
                        <button
                            onClick={() => this.submitVote(this.props.id, 'downVote')}>DOWNVOTE
                        </button>

                        <br/>

                        <CardText className='post-content'>{this.props.body}</CardText>
                        <hr/>
                        <Button className='post-comments float-left'>Comments ({this.props.commentCount})</Button>
                        <br/><br/>
                        <i>
                            <p>
                                <span className='post-category float-left'>
                                    #{this.props.category}
                                </span>
                                <span className='post-dateCreated float-right'>
                                    Created: {new Date(this.props.timestamp).toDateString()}
                                </span>
                            </p>
                        </i>
                    </CardBody>
                </Card>
            </Col>
        );
    };


}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapDispatchToProps
)(Post);