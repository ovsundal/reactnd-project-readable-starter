import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import VotePanel from "../utils/VotePanel";
import {deletePost} from "../../actions";

class ShowPosts extends Component {

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
                            componentType='post'
                        />
                        <br/>
                        <CardText className='post-content'>{this.props.body}</CardText>
                        <hr/>
                        <Link
                            to={{
                                pathname: `/${this.props.category}/${this.props.id}`
                            }}>
                            <Button
                                className='post-comments float-left'>View Comments ({this.props.commentCount})
                            </Button>
                        </Link>
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

export default connect(
    null,
    {deletePost}
)(ShowPosts);