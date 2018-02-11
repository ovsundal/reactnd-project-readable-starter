import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import VotePanel from "./VotePanel";

class Post extends Component {


    submitVote =(id, voteType) => {
        this.props.votePost(id, voteType)
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
                                pathname: `/${this.props.category}/${this.props.id}`
                            }}>
                            <CardTitle className='post-title'>{this.props.title}</CardTitle>
                        </Link>
                        <CardSubtitle>
                            <span className=' post-author'>Author: {this.props.author}</span>
                        </CardSubtitle>
                        <VotePanel
                            id={this.props.id}
                            voteScore={this.props.voteScore}
                        />
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
    votePost: (id, voteType) => dispatch(actions.votePost(id, voteType)),
    deletePost: (id) => dispatch(actions.deletePost(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Post);