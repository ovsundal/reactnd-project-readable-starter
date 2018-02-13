import React from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Comment from "./ShowComment";
import EditPost from "./EditPost";
import CreatePost from "./CreatePost";

class CreateEditPostView extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                id: '',
                author: '',
                title: '',
                content: '',
                category: '',
                voteScore: '',
                comments: []
            };

            //if this is an existing post to edit, do an api query to get post info

            // if(this.props.id) {
            //
            // }
        }

        //the entire action object is returned, check if it is post or comment using action.type
    componentWillReceiveProps(props) {
        if(props.post && props.post[0]) {
            const post = props.post[0];
            this.setState({
                id: post.id,
                author: post.author,
                title: post.title,
                content: post.body,
                category: post.category,
                voteScore: post.voteScore,
                selectedCategory: post.category
            });
        }
            // } else {
        //     const comments = props.state.comments.slice();
        //     this.setState({
        //         comments: comments
        //     });
        // }
    }
    componentWillMount() {
        this.props.getPost(this.props.id);
        this.props.getComments(this.props.id);
    }

    render() {
        return (
        <div>
            <section className='post'>
                {/*for new post*/}
                {this.state.id === ''
                && <CreatePost/>
                }

                {/*for edit post*/}
                {this.state.id !== ''
                && <article key={this.state.id}>
                        <EditPost
                            id={this.state.id}
                            title={this.state.title}
                            body={this.state.content}
                            author={this.state.author}
                            category={this.state.category}
                            timestamp={new Date(this.state.timestamp).toDateString()}
                            voteScore={this.state.voteScore}
                            commentCount={this.state.commentCount}
                        />
                    </article>
                }
            </section>

            <br/><br/><br/>

            <section className='comments'>
                {this.state.comments.length > 0
                && this.state.comments.map((comment) =>

                  <Comment
                  key={comment.id}
                  id={comment.id}
                  parentId={comment.parentId}
                  author={comment.author}
                  body={comment.body}
                  timestamp={comment.timestamp}
                  voteScore={comment.voteScore}
                  />
                )}
            </section>
        </div>

        );
    }
}

function mapStateToProps(state) {
    return {post: state.PostReducer};
}

const mapDispatchToProps = dispatch => ({
    addPost: (data) => dispatch(actions.createPost(data)),
    updatePost: (data) => dispatch(actions.updatePost(data)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    getPost: (id) => dispatch(actions.getPost(id)),
    getComments: (id) => dispatch(actions.getComments(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPostView))
