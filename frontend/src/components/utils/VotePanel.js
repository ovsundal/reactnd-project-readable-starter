import React, {Component} from "react";
import {connect} from "react-redux";
import {voteComment, votePost} from "../../actions";

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
                <button
                    className='float-right' type='button'
                    onClick={() => this.submitVote('downVote')}>DOWNVOTE
                </button>
                <button
                    className='float-right' type='button'
                    onClick={() => this.submitVote('upVote')}>UPVOTE
                </button>
            </section>
        )
    }
}

export default connect(
    null,
    {votePost, voteComment}
)(VotePanel);
