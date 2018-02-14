import React, {Component} from "react";
import {connect} from "react-redux";
import {voteComment, votePost} from "../../actions";

class VotePanel extends Component {

    submitVote = (id, voteType, compType) => {
    console.log('from submitVote. Should only be called once')
    // console.log(id);
    // console.log(voteType);
    // console.log(compType);
        console.log(this.props)

        this.props.componentType === 'post'
        ? this.props.votePost(id, voteType)
        : this.props.voteComment(id, voteType)
    };


    componentWillReceiveProps(props) {
        console.log(props)
    }

    render() {
        console.log(this.props)
        const
            {
            id,
            compType,
            voteScore
            }
            = this.props;

        return (
            <div>
                {/*QUESTION: Why does this component not recognize this.props.compType?*/}
                <span className='float-right'>Score: {voteScore}</span>
                <br/>
                <button
                    className='float-right' type='button'
                    onClick={() => this.submitVote(id, 'downVote', compType)}>DOWNVOTE
                </button>
                <button
                    className='float-right' type='button'
                    onClick={() => this.submitVote(id, 'upVote', compType)}>UPVOTE
                </button>
            </div>
        )
    }
}

export default connect(
    null,
    {votePost, voteComment}
)(VotePanel);
