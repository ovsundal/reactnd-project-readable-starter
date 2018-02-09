import React, { Component } from 'react';
import { Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {votePost} from "../actions";
import {connect} from "react-redux";
import * as actions from "../actions";
import {Link} from "react-router-dom";

class Post extends Component {


    submitVote =(id, voteType) => {
        this.props.dispatch(votePost(id, voteType))
    };

    deletePost = (id) => {
        this.props.deletePost(id);
    };

    render() {
        return (
            <Col>
                <Card className="post">
                    <CardBody>
                        <Link
                            to={{
                                pathname: `/${this.props.category}/${this.props.id}`,
                                data: this.props
                            }}>
                            <CardTitle className='post-title'>{this.props.title}</CardTitle>
                        </Link>
                        <CardSubtitle>
                            <span className=' post-author'>Author: {this.props.author}</span>
                            <span className=' post-score float-right'>Score: {this.props.voteScore}</span>
                            <br/>
                        </CardSubtitle>
                        {/*vote section*/}
                        <button
                            className='float-right'
                            onClick={() => this.submitVote(this.props.id, 'downVote')}>DOWNVOTE
                        </button>
                        <button
                            className='float-right'
                            onClick={() => this.submitVote(this.props.id, 'upVote')}>UPVOTE
                        </button>
                        <br/>

                        <CardText className='post-content'>{this.props.body}</CardText>
                        <hr/>
                        <Button
                            className='post-comments float-left'>Edit Post/View Comments ({this.props.commentCount})
                        </Button>
                        <Button
                            onClick={() => this.deletePost(this.props.id)}
                            className='float-right'>Delete Post
                        </Button>
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
    deletePost: (id) => dispatch(actions.deletePost(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Post);