import React from 'react';
import {votePost} from "../actions";

class Voting extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUpvote = (event) => {
        event.preventDefault();
        const data = {
            id: this.props.id,
            voteType: 'upVote'
        };
console.log(data)
        // this.props.dispatch(votePost(data))
    };

    handleDownvote = (event) => {
        event.preventDefault();
        const data = {
            id: this.props.id,
            voteType: 'downVote'
        };
        console.log(data)
        // this.props.dispatch(votePost(data))
    };



    render() {
        return (<div>
            <button onClick={this.handleUpvote}>UPVOTE</button>
            <button onClick={this.handleDownvote}>DOWNVOTE</button>
        </div>)
    }
}

export default Voting;