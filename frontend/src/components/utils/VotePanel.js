import React, {Component} from "react";
import {connect} from "react-redux";
import {voteComment, votePost} from "../../actions";
import {Button} from "reactstrap";

class VotePanel extends Component {

    submitVote = (voteType) => {
        const {id, componentType, votePost, voteComment} = this.props;

        componentType === 'post'
        ? votePost(id, voteType)
        : voteComment(id, voteType)
    };

    render() {
        const {voteScore} = this.props;
        return (
            <section>
                <span className='float-right'>Score: {voteScore}</span>
                <br/>
                <Button
                    className='float-right fa fa-thumbs-o-down' type='button'
                    onClick={() => this.submitVote('downVote')}>
                </Button>
                <Button
                    className='float-right 	fa fa-thumbs-o-up' type='button'
                    onClick={() => this.submitVote('upVote')}>
                </Button>
            </section>
        )
    }
}

export default connect(
    null,
    {votePost, voteComment}
)(VotePanel);
