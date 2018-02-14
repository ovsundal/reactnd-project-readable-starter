import React, {Component} from "react";
import {connect} from "react-redux";
import {voteComment, votePost} from "../../actions";

class VotePanel extends Component {

    submitVote = (voteType) => {
    console.log('from submitVote. Should only be called once')
    // console.log(id);
    // console.log(voteType);
    // console.log(compType);
        console.log(this.props)
        const {id, componentType, votePost, voteComment, parentId} = this.props;

        componentType === 'post'
        ? votePost(id, voteType)
        : voteComment(id, voteType, parentId)
    };


    componentWillReceiveProps(props) {
        console.log(props)
    }

    render() {
        const
            {
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
                    onClick={() => this.submitVote('downVote')}>DOWNVOTE
                </button>
                <button
                    className='float-right' type='button'
                    onClick={() => this.submitVote('upVote')}>UPVOTE
                </button>
            </div>
        )
    }
}



export default connect(
    null,
    {votePost, voteComment}
)(VotePanel);
