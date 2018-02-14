import React, {Component} from "react";
import {connect} from "react-redux";
import {voteComment, votePost} from "../../actions";

class VotePanel extends Component {

    submitVote = (id, voteType, compType) => {

        compType === 'post'
        ? this.props.votePost(id, voteType)
        : this.props.voteComment(id, voteType)
    };

    render() {
        return (
            <div>

                {/*QUESTION: Why does this component not recognize this.props.compType?*/}
                <span className='float-right'>Score: {this.props.voteScore}</span>
                <br/>
                <button
                    className='float-right'
                    onClick={() => this.submitVote(this.props.id, 'downVote', this.props.compType)}>DOWNVOTE
                </button>
                <button
                    className='float-right'
                    onClick={() => this.submitVote(this.props.id, 'upVote', this.props.compType)}>UPVOTE
                </button>
            </div>
        )
    }
}

export default connect(
    null,
    {votePost, voteComment}
)(VotePanel);
