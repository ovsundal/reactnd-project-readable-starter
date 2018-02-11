import React, {Component} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

class VotePanel extends Component {

    submitVote = (id, voteType) => {
        this.props.votePost(id, voteType)
    };

    render() {
        return (
            <div>
                <span className=' post-score float-right'>Score: {this.props.voteScore}</span>
                <br/>
                <button
                    className='float-right'
                    onClick={() => this.submitVote(this.props.id, 'downVote')}>DOWNVOTE
                </button>
                <button
                    className='float-right'
                    onClick={() => this.submitVote(this.props.id, 'upVote')}>UPVOTE
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    votePost: (id, voteType) => dispatch(actions.votePost(id, voteType))
});

export default connect(
    null,
    mapDispatchToProps
)(VotePanel);
