import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import VotePanel from "./VotePanel";

class Comment extends Component {

    deleteComment = (id) => {
        this.props.deleteComment(id);
    };

    render() {
        return (
            <Col>
                <Card className="comment">
                    <CardBody>
                        {/*<Link*/}
                            {/*to={{*/}
                                {/*pathname: `/${this.props.category}/${this.props.id}`*/}
                            {/*}}>*/}
                            {/*<CardTitle className='comment-title'>{this.props.title}</CardTitle>*/}
                        {/*</Link>*/}
                        <CardSubtitle>
                            <span className=' comment-author'>Author: {this.props.author}</span>
                        </CardSubtitle>
                        <VotePanel
                            id={this.props.id}
                            voteScore={this.props.voteScore}
                        />
                        <br/>
                        <CardText className='comment-content'>{this.props.body}</CardText>
                        <hr/>
                        <footer className='button-panel'>
                            <Button
                                // onClick={() => this.deleteComment(this.props.id)}
                                className='float-left'>Edit
                            </Button>
                            <Button
                                // onClick={() => this.deleteComment(this.props.id)}
                                className='float-right'>Delete
                            </Button>
                        </footer>
                        <br/><br/>
                        <i>
                            <p>
                                {/*<span className='comment-category float-left'>*/}
                                    {/*#{this.props.category}*/}
                                {/*</span>*/}
                                <span className='comment-dateCreated float-right'>
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
    // deleteComment: (id) => dispatch(actions.deleteComment(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Comment);