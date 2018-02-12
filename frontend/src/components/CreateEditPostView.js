import React from 'react';
import * as actions from "../actions";
import {GET_POST} from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Comment from "./ShowComment";
import CreateEditPost from "./EditPost";
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

            if(this.props.id) {
                this.props.getPost(this.props.id);
            }
        }

        //the entire action object is returned, check if it is post or comment using action.type
    componentWillReceiveProps(props) {

        if(props.state.type === GET_POST) {
            const post = props.state.posts;
            this.setState({
                id: post.id,
                author: post.author,
                title: post.title,
                content: post.body,
                category: post.category,
                voteScore: post.voteScore,
                selectedCategory: post.category
            });
        } else {
            const comments = props.state.comments.slice();
            this.setState({
                comments: comments
            });
        }
    }

    componentDidMount() {
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
                && [this.state].map((post) =>
                    <article key={post.id}>
                        <CreateEditPost
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            author={post.author}
                            category={post.category}
                            timestamp={new Date(post.timestamp).toDateString()}
                            voteScore={post.voteScore}
                            commentCount={post.commentCount}
                        />
                    </article>
                )}
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
    return {state};
}

const mapDispatchToProps = dispatch => ({
    addPost: (data) => dispatch(actions.addPost(data)),
    updatePost: (data) => dispatch(actions.updatePost(data)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    getPost: (id) => dispatch(actions.getPost(id)),
    getComments: (id) => dispatch(actions.getComments(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPostView))
